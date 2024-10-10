const fs = require('fs');


/* // Load categories and subcategories from their respective JSON files
const categories = JSON.parse(fs.readFileSync('data/categories.json', 'utf8'));
const subcategories = JSON.parse(fs.readFileSync('data/subcategories.json', 'utf8'));

// Create a map from category id to category slug for easy lookup
const categoryMap = categories.reduce((map, category) => {
    map[category.id] = category.slug;
    return map;
}, {});

// Replace categoryId with categorySlug in each subcategory
const updatedSubcategories = subcategories.map(subcategory => {
    const categorySlug = categoryMap[subcategory.categoryId];
    if (categorySlug) {
        subcategory.categorySlug = categorySlug;
        delete subcategory.categoryId; // Remove the old categoryId field
    }
    return subcategory;
});

// Save the updated subcategories back to the file
fs.writeFileSync('data/subcategories.json', JSON.stringify(updatedSubcategories, null, 2), 'utf8');

console.log('Subcategories updated successfully!'); */

// Load categories and subcategories from their respective JSON files
const subcategories = JSON.parse(fs.readFileSync('data/subcategories.json', 'utf8'));
const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

// Create a map from category id to category slug for easy lookup
const subcategoryMap = subcategories.reduce((map, subcategory) => {
    map[subcategory.id] = subcategory.slug;
    return map;
}, {});

// Replace categoryId with categorySlug in each subcategory
const updatedProducts = products.map(products => {
    const subcategorySlug = subcategoryMap[products.subcategoryId];
    if (subcategorySlug) {
        products.subcategorySlug = subcategorySlug;
        delete products.subcategoryId; // Remove the old categoryId field
    }
    return products;
});

// Save the updated products back to the file
fs.writeFileSync('data/products.json', JSON.stringify(updatedProducts, null, 2), 'utf8');

console.log('Products updated successfully!');