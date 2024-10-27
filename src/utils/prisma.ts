import { readFileSync } from "fs";

export const extractModels = (filePath: string) => {
    const content = readFileSync(filePath, 'utf-8');
    
    // Split content by model keyword, skipping anything that starts with "enum"
    const models = content.split(/\n(?=model\s)/).filter(part => part.trim().startsWith('model'));

    const parsedModels: Record<string, any> = {};
    
    models.forEach((model: string) => {
        const lines = model.split('\n');
        const modelName = lines[0].split('{')[0].replace('model', '').trim();
        parsedModels[modelName] = {};
        lines.slice(1, -1).forEach(line => {
            const cleanLine = line.trim();
            // Ignore lines that aren't model fields (like enums or empty lines)
            if (cleanLine && !cleanLine.startsWith('@') && !cleanLine.includes('enum') && !cleanLine.startsWith('//')) {
                const [name, type] = cleanLine.split(/\s+/);
                if (name && type) {
                    parsedModels[modelName][name] = type;
                }
            }
        });
    });
    return parsedModels;
};

export const extractEnums = (filePath: string) => {
    const content = readFileSync(filePath, 'utf-8');  
    const enums = content.split('enum').slice(1).map(m => m.trim());
    const parsedEnums: Record<string, any> = {};
    enums.forEach( (enumString: string) => {
        const lines = enumString.split('\n');
        const enumName = lines[0].split('{')[0].trim();
        parsedEnums[enumName] = [];
        lines.slice(1, -1).forEach(line => {
            const value = line.trim();
            if (value) {
                parsedEnums[enumName].push(value);
            }
        });
    });
    return parsedEnums;
}