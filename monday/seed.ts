import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

import { extractModels } from '../src/utils/prisma'
import { createBoard, createColumn, deleteAllColumns, generateMondayFormat, getBoardNames } from '../src/utils/monday'
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';

import { join } from 'path';

const models = extractModels(join(__dirname, '..', 'prisma', 'schema.prisma'));

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
            if(!false ){
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

async function main() {
    await generateBoards()
    await createBoards()
}

main()