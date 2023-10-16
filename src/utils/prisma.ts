import { readFileSync } from "fs";

export const extractModels =(filePath: string)=> {
    const content = readFileSync(filePath, 'utf-8');
    const models = content.split('model').slice(1).map(m => m.trim());
    const parsedModels: Record<string, any> = {};
    models.forEach((model: string) => {
        const lines = model.split('\n');
        const modelName = lines[0].split('{')[0].trim();
        parsedModels[modelName] = {};
        lines.slice(1, -1).forEach(line => {
            const [name, type] = line.trim().split(/\s+/);
            if (name && type) {
                parsedModels[modelName][name] = type;
            }
        });
    });
    return parsedModels;
}