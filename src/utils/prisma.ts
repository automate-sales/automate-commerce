import { readFileSync } from "fs";

export const extractModels = (filePath: string) => {
    const content = readFileSync(filePath, 'utf-8');
    const modelPattern = /model\s+(\w+)\s*{([^}]*)}/gs;
    const parsedModels: Record<string, Record<string, string>> = {};
    let match;
    while ((match = modelPattern.exec(content)) !== null) {
        const modelName = match[1].trim();
        const fields = match[2]
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('//') && !line.startsWith('@'));
        parsedModels[modelName] = {};
        fields.forEach(field => {
            const [name, type] = field.split(/\s+/);
            if (name && type) {
                parsedModels[modelName][name] = type;
            }
        });
    }
    return parsedModels;
};


export const extractEnums = (filePath: string) => {
    const content = readFileSync(filePath, 'utf-8');  
    const enumPattern = /enum\s+(\w+)\s*{([^}]*)}/g;
    const parsedEnums: Record<string, string[]> = {};

    let match;
    while ((match = enumPattern.exec(content)) !== null) {
        const enumName = match[1].trim();
        const enumValues = match[2]
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('//')); // Remove empty lines and comments

        parsedEnums[enumName] = enumValues;
    }

    return parsedEnums;
};