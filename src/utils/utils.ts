export function getIntl(field: any, lang: string): string {
    if(field !== null && typeof field === 'object' && !Array.isArray(field)){
        return lang in field ? field[lang] : Object.values(field)[0]
    } else if(typeof field === 'string'){
        return field
    } else {
        return ''
    }
}