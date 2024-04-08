import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

type Column = {
    title: string,
    description: string,
    column_type: string,
    labels?: Record<string, string>,
    settings?: Record<string, any>
}

function determineColumnType(prismaType: string): string {
    switch (prismaType) {
        case 'Int':
            return 'numbers';
        case 'String':
            return 'text';
        case 'DateTime':
            return 'date';
        default:
            if (prismaType.endsWith('[]')) {
                return 'file';  // Assuming all arrays are files, you might want to refine this
            }
            return 'text'; // Default type for now
    }
}

const toSnakeCase =(str: string)=> {
    return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase()
    .slice(0, 20);
}

export function generateMondayFormat(schema: Record<string, string>) {
    const result: Record<string, any> = {};

    for (const [key, prismaType] of Object.entries(schema)) {
        const columnName = key === 'id' ? 'commerce_id' : toSnakeCase(key);
        const title = columnName.charAt(0).toUpperCase() + columnName.slice(1).replace(/([A-Z])/g, ' $1'); // Convert camelCase to Title Case

        result[columnName] = {
            title: title,
            description: `${title.toLowerCase()} of the category`,
            column_type: determineColumnType(prismaType)
        } as Column;
    }
    return result;
}

// make a request to the monday.com API
// returns a succesful response in the format response = { data: [queryName]: []|{} }
export async function mondayRequest(
    query: string, // valid monday.com graphQL query or mutation to execute
    apiVersion: '2023-07' | '2023-10' = '2023-07', // monday.com API version, 2023-07 or 2023-10
    browser: boolean = false // true if request is made from browser, false if made from server
) {
    try {
        const res = await fetch("https://api.monday.com/v2", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'API-Version': apiVersion,
                ...(process.env.MONDAY_API_KEY ? { 'Authorization': process.env.MONDAY_API_KEY } : {})
            },
            body: JSON.stringify({
                'query': query
            }),
            cache: 'no-store',
            ...(browser ? { mode: 'no-cors' } : {})
        });
        if (res.ok) {
            const result = await res.json();
            if ('error_code' in result) throw new Error(result.error_message)
            else if ('errors' in result) throw new Error(result.errors[0].message)
            else return result
        } else {
            const errorTxt = await res.text()
            throw new Error(errorTxt)
        }
    } catch (err: any) {
        throw new Error(err)
    }
}

export const getBoardNames = async()=> {
    const query = `query {
        boards(workspace_ids: ${process.env.MONDAY_WORKSPACE_ID}) {
          name
        }
    }`;
    try {
      const result = await mondayRequest(query);
      if (result.data && result.data.boards) {
        return result.data.boards.map( (board: {name: string}) => board.name);
      } else return []
    } catch (error) {
      console.error('Failed to fetch board names:', error);
      return [];
    }
}

export const createBoard = async (boardName: string, boardKind: 'public' | 'private' = 'public') => {
    const query = `mutation {
        create_board (
            board_name: "${boardName}", 
            board_kind: ${boardKind},
            workspace_id: ${process.env.MONDAY_WORKSPACE_ID}
        ) {
            id
        }
    }`;
    const res = await mondayRequest(query);
    return res.data.create_board.id;
}

export const createColumn = async (board_id: number, columnKey: string, column: Column) => {
    let query = '';
    if (column.column_type === 'status') {
        query = `
            mutation {
                create_column(
                    board_id: ${board_id}
                    id: "${columnKey}"
                    title: "${column.title}"
                    column_type: status
                    description: "${column.description}"
                    defaults: ${JSON.stringify(JSON.stringify(
            { labels: column.labels }
        ))}
                ) {
                    id
                }
            }`;
    } else if (column.column_type === 'dropdown') {
        // Convert the labels format for dropdown
        let dropdownLabels = [];
        for (const labelKey in column.labels) {
            dropdownLabels.push({ id: parseInt(labelKey), name: column.labels[labelKey] });
        }

        query = `
            mutation {
                create_column(
                    board_id: ${board_id}
                    id: "${columnKey}"
                    title: "${column.title}"
                    column_type: dropdown
                    description: "${column.description}"
                    defaults: ${JSON.stringify(JSON.stringify(
            {
                settings: {
                    labels: dropdownLabels
                }
            }
        ))}
                ) {
                    id
                }
            }`;
    } else {
        query = `
            mutation {
                create_column(
                    board_id: ${board_id}
                    id: "${columnKey}"
                    title: "${column.title}"
                    column_type: ${column.column_type}
                    description: "${column.description}"
                ) {
                    id
                    title
                    description
                }
            }`;
    }
    try {
        let res = await mondayRequest(query, '2023-10')
        if ('error_code' in res) {
            console.error(`Error creating column ${columnKey}: `, res)
        } else console.log(`Succesfully created column ${columnKey}`)
    } catch (err) {
        console.error(`Error creating column ${columnKey}: `, err)
    }
}


async function getColumnIds(board_id: number) {
    const query = `
        query {
            boards(ids: ${board_id}) {
                columns {
                    id
                }
            }
        }
    `;
    const response = await mondayRequest(query)
    console.log('colunsssSSSSS ', JSON.stringify(response.data.boards[0].columns, null, 2))
    return response.data.boards[0].columns.map( (column: {id:number} ) => column.id);
}

async function deleteColumn(board_id: number, column_id: number) {
    const mutation = `
        mutation {
            delete_column(board_id: ${board_id}, column_id: "${column_id}") {
                id
            }
        }
    `;
    const res = await mondayRequest(mutation);
    console.log(`Deleted column ${column_id}: `, res)
    return res
}

export async function deleteAllColumns(board_id: number) {
    const columnIds = await getColumnIds(board_id)
    for(let colId of columnIds){
       if(colId !== 'name') await deleteColumn(board_id, colId)
    }
}