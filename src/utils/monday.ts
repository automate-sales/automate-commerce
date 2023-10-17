import dotenv from 'dotenv';
import { RequestInfo } from 'undici-types';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

type Column = {
    title: string,
    description: string,
    column_type: string,
    labels?: Record<string, string>,
    settings?: Record<string, any>
}

export const  determineColumnType =(key: string, prismaType: string)=> {
    switch (key) {
        case 'description':
            return 'long_text';
        case 'images':
            return 'file';
        default:
            break;
    }
    switch (prismaType) {
        case 'Int':
            return 'numbers';
        case 'Float':
            return 'numbers';
        case 'String':
            return 'text';
        case 'DateTime':
            return 'date';
        case 'Boolean':
            return 'checkbox'
        default:
            return 'text'; // Default type for now
    }
}

const toSnakeCase =(str: string)=> {
    return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase()
    .slice(0, 20);
}

export const getMondayDateTime = (date=null) => {
    const now = date? new Date(date) : new Date();
    const year = now.getUTCFullYear();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
export const getMondayValue = (value: any, type: string) => {
    if(typeof value === 'object' && value !== null){
        return JSON.stringify(value)
    } else{
        switch(type){
            case 'checkbox':
                return { checked: String(value)}
            case 'date':
                return getMondayDateTime(value)
            case 'file':
                return null
            default:
                return value
        }
    }
}
export const getMondayItemName = (item: {[key:string]: any}): string => {
    if('title' in item) return item.title.trim()
    else if('name' in item) return item.name.trim()
    else return 'blank'
}

export function generateMondayFormat(schema: Record<string, string>) {
    const result: Record<string, any> = {};

    for (const [key, prismaType] of Object.entries(schema)) {
        const required = prismaType.endsWith('?') ? false : true;
        const cleanType = prismaType.replace('?', '');
        const columnName = key === 'id' ? 'commerce_id' : toSnakeCase(key);
        let title = columnName.charAt(0).toUpperCase() + columnName.slice(1).replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')
        result[columnName] = {
            title: `${title}${required ? '*' : ''}`,
            description: `${title.toLowerCase()} of the category`,
            column_type: determineColumnType(key, cleanType)
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

export const getBoardIds = async()=> {
    const query = `query {
        boards(workspace_ids: ${process.env.MONDAY_WORKSPACE_ID}) {
            id
            name
        }
    }`;
    try {
      const result = await mondayRequest(query);
      if (result.data && result.data.boards) {
        let boardIds = {} as {[key: string]: number}
        result.data.boards.map( (board: { id: number, name: string}) => boardIds[board.name.replace(' ', '_')] = board.id);
        return boardIds
      } else return {}
    } catch (error) {
      console.error('Failed to fetch board names:', error);
      return {};
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


export async function createItem(
    boardId: number,
    itemName: string,
    columnValues: {[key: string]: any}
){   
    try{
        const mutation = `mutation {
            create_item(
                item_name: "${itemName}"
                board_id: ${boardId}
                column_values: ${JSON.stringify(JSON.stringify(columnValues))}
            ) {
                id
                name
                column_values {
                    id
                    text
                    value
                }
            }
        }`
        const res = await mondayRequest(mutation)
        return res.data.create_item.id
    }catch(err: any){
        throw new Error(err)
    }
}

export const downloadFileFromUrl =async(url: URL)=> {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const buffer = await response.arrayBuffer()
            return buffer
        } else {
            const err = await response.text()
            throw new Error(err);
        }
    } catch(err: any){
        console.error(err.message? err.message : JSON.stringify(err))
        throw new Error(err)
    }
}

// server use only
export async function uploadAssetToMonday(
    pulseId: string,
    arrayBuffer: ArrayBufferLike, // the file as an arrayBuffer
    fileName: string='file',
    columnId: string='files' // ID of the files column
){
    try{
        var query = `mutation ($file: File!) { add_file_to_column (file: $file, item_id: ${pulseId}, column_id: "${columnId}") { id } }`;
        var url = "https://api.monday.com/v2/file";
        var boundary = "xxxxxxxxxx";
        var data = "";
        // construct query part
        data += "--" + boundary + "\r\n";
        data += "Content-Disposition: form-data; name=\"query\"; \r\n";
        data += "Content-Type:application/json\r\n\r\n";
        data += "\r\n" + query + "\r\n";
        // construct file part
        data += "--" + boundary + "\r\n";
        data += "Content-Disposition: form-data; name=\"variables[file]\"; filename=\"" + fileName + "\"\r\n";
        data += "Content-Type:application/octet-stream\r\n\r\n";
        var payload = Buffer.concat([
            Buffer.from(data, "utf8"),
            Buffer.from(arrayBuffer),
            Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
        ]);
        // construct request options
        var options = {
            method: 'post',
            headers: {
                "Content-Type": "multipart/form-data; boundary=" + boundary,
                "Authorization" : process.env.MONDAY_API_KEY
            },
            body: payload,
        };
        // make request
        const response = await fetch(url, options)
        if(response.ok){
            return await response.json()
        } else {
            const errMsg = await response.text()
            console.error('There was an error uploading the assets to monday: ', errMsg)
            throw new Error(errMsg)
        }
    } catch(err){
        throw new Error(err)
    }
}