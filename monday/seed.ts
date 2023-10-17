import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

import { extractModels } from '../src/utils/prisma'
import { createBoard, createColumn, createItem, deleteAllColumns, determineColumnType, downloadFileFromUrl, generateMondayFormat, getBoardIds, getBoardNames, getMondayDateTime, getMondayItemName, getMondayValue, uploadAssetToMonday } from '../src/utils/monday'
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';

import { join } from 'path';

const models = extractModels(join(__dirname, '..', 'prisma', 'schema.prisma'));

console.log(models)

async function generateBoards() {
    if (!existsSync(join(__dirname, 'boards'))) mkdirSync(join(__dirname, 'boards'))
    for (const model in models) {
        console.log(model);
        const mondayItem = generateMondayFormat(models[model]);
        const modelFile = join(__dirname, 'boards', `${model}.json`);
        if (!existsSync(modelFile)) writeFileSync(modelFile, JSON.stringify(mondayItem, null, 2));
        console.log(mondayItem);
        console.log('\n\n')
    }
}

async function createBoards() {
    const boardsDir = join(__dirname, 'boards');
    const filenames = readdirSync(boardsDir);
    const boards = await getBoardNames()
    console.log('boards', boards)
    filenames.forEach(async filename => {
        const filePath = join(boardsDir, filename);
        if (statSync(filePath).isFile()) {
            const modelName = filename.split('.')[0];
            if(!boards.includes(modelName)){
                const content = readFileSync(filePath, 'utf-8');
                const columns = JSON.parse(content);
                console.log(`Content of ${filename}:\n`, columns);
                const boardId = await createBoard(modelName)
                await deleteAllColumns(boardId)
                for(let col in columns){
                    await createColumn(boardId, col, columns[col])
                }
            }
        }
    });
}

const getImgSubPath =(modelName: string)=> {
    switch(modelName){
        case 'Category':
            return 'categories'
        case 'Subcategory':
            return 'subcategories'
        case 'Product':
            return 'products'
        default:
            return ''
    }
}

async function createItems() {
    const dataDir = join(__dirname, '..', 'data');
    const filenames = readdirSync(dataDir);
    const boardIds = await getBoardIds()
    //console.log('boards', boardIds)
    for(let filename of filenames) {
        //console.log('filename', filename)
        const filePath = join(dataDir, filename);
        if (statSync(filePath).isFile() && filename.endsWith('.ts') ) {
            const modelName = filename.split('.')[0];
            const { default: items } = await import(filePath);
            console.log(modelName.replace(' ', '_'))
            let boardId = boardIds[modelName.replace(' ', '_')]
            for( let item of items ){
                let itemName = getMondayItemName(item)
                let colVals = {} as {[key: string]: any}
                let fileCols = {} as {[key: string]: string[]}
                for(let field in item){
                    let fieldType = models[modelName][field]
                    let mondayType = determineColumnType(field, fieldType)
                    if(item[field]){
                        if(mondayType === 'file') fileCols[field] = item[field]
                        else if(field === 'id') colVals['commerce_id'] = item[field]
                        else colVals[field] = getMondayValue(item[field], mondayType)
                    }
                }
                console.log('Creating item: ', itemName, ' in board: ', boardId)
                console.log(JSON.stringify(colVals, null, 2))
                const itemId = await createItem(boardId, itemName, colVals)
                console.log('Files: ', fileCols)
                for(let field in fileCols){
                    for(let file of fileCols[field]){
                        let fileName = file.split('/').pop()
                        console.log('Uploading file: ', file)
                        let buffer = await downloadFileFromUrl(new URL(`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${getImgSubPath(modelName)}/${file}`))
                        await uploadAssetToMonday(itemId, buffer, fileName, field)
                    }
                }
            } 
        }
    }
}

async function main() {
    //await generateBoards()
    //await createBoards()
    await createItems()
}

main()