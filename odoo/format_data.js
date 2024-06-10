// format categories
const fs = require('fs');
const IMAGE_HOST='https://d1tnzngtf1n4as.cloudfront.net/public'

function formatCategories() {
    const jsonFilePath = 'data/categories.json';
    try {
        const data =  fs.readFileSync(jsonFilePath, 'utf8');
        const categories = JSON.parse(data);
        let catMap = {};
        let csvContent = 'name\n';
        categories.forEach(cat => {
            csvContent += `${cat.title.en}\n`;
            catMap[cat.id] = cat.title.en;
        });
        const csvFilePath = 'odoo/data/categories.csv'
        fs.writeFileSync(csvFilePath, csvContent, 'utf8');
        return catMap;
    } catch (err) {
        console.error('error procesing categories', err);
    }
}

const categoriesMap = formatCategories()

function formatSubcategories() {
    const jsonFilePath = 'data/subcategories.json';
    try {
        const data =  fs.readFileSync(jsonFilePath, 'utf8');
        const subcategories = JSON.parse(data);
        let catMap = {};
        let csvContent = 'name,parent_id\n';
        subcategories.forEach(subcat => {
            let title = subcat.title.en;
            let parent = categoriesMap[subcat.categoryId]
            csvContent += `${title},${parent}\n`;
            catMap[subcat.id] = {id: title, parent: parent};
        });
        const csvFilePath = 'odoo/data/subcategories.csv'
        fs.writeFileSync(csvFilePath, csvContent, 'utf8');
        return catMap;
    } catch (err) {
        console.error('error procesing subcategories', err);
    }
}

const subcategoriesMap = formatSubcategories()

function formatProducts() {
    const jsonFilePath = 'data/products.json';
    try {
        const data =  fs.readFileSync(jsonFilePath, 'utf8');
        const products = JSON.parse(data);
        let csvContent = 'External ID,Name,Product Type,Internal Reference,Sales Price,Sales Description,available_in_pos,categ_id,image_1920\n';
        products.forEach(product => {
            let subcat = subcategoriesMap[product.subcategoryId]
            csvContent += `${product.id},${product.title.en},Storable Product,${product.sku},${product.price},${product.title.en},1,${subcat.parent} / ${subcat.id},${IMAGE_HOST}/products/${product.images[0]}\n`;
        });
        const csvFilePath = 'odoo/data/products.csv'
        fs.writeFileSync(csvFilePath, csvContent, 'utf8');
        return;
    } catch (err) {
        console.error('error procesing products', err);
    }
}

formatProducts()