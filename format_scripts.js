const fs = require('fs');
const path = require('path');

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
/* const subcategories = JSON.parse(fs.readFileSync('data/subcategories.json', 'utf8'));
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

console.log('Products updated successfully!'); */

// Path to your products.json file


// Function to read JSON file and output desired key-value pairs
/* function extractSkuToSubcategoryPairs() {
    // Read the file
    const filePath = './data/products.json';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            // Parse the JSON data
            const products = JSON.parse(data);

            // Create an object with sku:subcategorySlug pairs
            const skuSubcategoryPairs = {};
            products.forEach(product => {
                if (product.sku && product.subcategorySlug) {
                    skuSubcategoryPairs[product.sku] = product.subcategorySlug;
                }
            });

            // Output the result
            console.log(skuSubcategoryPairs);

           

        } catch (parseError) {
            console.error('Error parsing JSON data:', parseError);
        }
    });
}

// Call the function
extractSkuToSubcategoryPairs(); */

/* const skusToKeep = [
    "chair-axis-wh",
    "chair-vergex-bl",
    "chair-function-bl",
    "chair-phaser-bl",
    "chair-xtc-gr",
    "chair-stack-gr",
    "chair-sprinter-bl",
    "chair-somatic-gr",
    "chair-jargonX-bl",
    "chair-radix-bl",
    "chair-anion-gr",
    "chair-executive-stratus-gr",
    "chair-binary-gr",
    "chair-synapse-bl",
    "chair-parser-bl",
    "chair-tension-bl",
    "chair-asci-gr",
    "chair-ajax-bl",
    "chair-operand-bl",
    "chair-tasker-gr",
    "chair-schema-bl",
    "chair-ajax-gr",
    "chair-scripter-bl",
    "chair-operand-gr",
    "chair-disruptive-bl",
    "chair-array-gr",
    "chair-argon-gr",
    "chair-tesseract-bl",
    "chair-asci-bl",
    "top-mela-white-182",
    "top-mela-white-152",
    "top-mela-white-121",
    "top-mela-ash-182",
    "top-mela-ash-152",
    "top-mela-ash-121",
    "top-mela-black-182",
    "top-mela-black-152",
    "top-mela-black-121",
    "top-mela-walnut-182",
    "frame-single-bl",
    "frame-single-wh",
    "frame-double-bl",
    "frame-double-wh",
    "frame-3stage-bl",
    "frame-L-wh",
    "frame-1col-wh",
    "stand-arm-alum-double-gr",
    "stand-arm-alum-single-bl",
    "stand-tablet-arm-sl",
    "stand-laptop-x-gr",
    "stand-laptop-adjus-sl",
    "cabinet-3drawer-slim-bl",
    "cable-grommet-50-bl",
    "stand-head-desk-sl",
    "light-arm-bl",
    "stand-cpu-under-bl",
    "anti-mat-shape1-bl",
    "pad-felt-80x40-gr",
    "balance-board-1-bl",
    "balance-board-2-bl",
    "drawer-under-lock-1",
    "stand-phone-clasic-gr",
    "stand-riser-monitor-sl"
]; */
  
  /* // Function to filter products and overwrite the file
  function filterAndOverwriteProducts() {
    const filePath = './data/products.json';
  
    // Read the products file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
  
      try {
        // Parse the JSON data
        const products = JSON.parse(data);
  
        // Filter products to keep only the ones with SKUs in the skusToKeep array
        const filteredProducts = products.filter(product => skusToKeep.includes(product.sku));
  
        // Write the filtered products back to the file
        fs.writeFile(filePath, JSON.stringify(filteredProducts, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('File successfully overwritten with filtered products.');
          }
        });
  
      } catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
      }
    });
  }
  
  // Run the function
  filterAndOverwriteProducts(); */

  const imagesDir = './data/images/products/';

// Function to delete a directory and its contents
const deleteDirectoryRecursive = (directoryPath) => {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach(file => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) { 
                deleteDirectoryRecursive(curPath); // Recursively delete subdirectories
            } else { 
                fs.unlinkSync(curPath); // Delete file
            }
        });
        fs.rmdirSync(directoryPath); // Delete the empty directory
        console.log(`Deleted directory: ${directoryPath}`);
    }
};

// Function to process and delete directories not in skusToKeep
const deleteUnusedSkuDirectories = () => {
    const skuDirectories = fs.readdirSync(imagesDir).filter(skuDir =>
        fs.statSync(path.join(imagesDir, skuDir)).isDirectory()
    );

    skuDirectories.forEach(sku => {
        if (!skusToKeep.includes(sku)) {
            const directoryPath = path.join(imagesDir, sku);
            deleteDirectoryRecursive(directoryPath);
        } else {
            console.log(`Keeping directory for SKU: ${sku}`);
        }
    });
};

// Run the function
deleteUnusedSkuDirectories();


  /* import { downloadImage, optimizeImage } from './src/utils/s3';
  import fs from 'fs';
  import path from 'path';
  
  // Type definitions for Product and Image
  interface Product {
    sku: string;
    images: string[];
    slug: string;
  }
  
  // File paths and configuration
  const productsFilePath = './data/products.json';
  const imagesDir = './data/images/products/';
  const oldImgHost = 'https://old-host.com/subcategories'; // replace with the actual host
  
  // Function to create directories if they don't exist
  const createDirIfNotExists = (dirPath: string): void => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  };
  
  // Function to save the optimized image to disk
  const saveImageToDisk = async (imageBuffer: Buffer, savePath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      fs.writeFile(savePath, imageBuffer, (err) => {
        if (err) {
          reject(new Error(`Failed to save image: ${err.message}`));
        } else {
          resolve();
        }
      });
    });
  };
  
  // Function to process each product
  const processProductImages = async (product: Product): Promise<void> => {
    const { sku, images, slug } = product;
    const imageDir = path.join(imagesDir, sku);
  
    // Ensure the image directory exists
    createDirIfNotExists(imageDir);
  
    const updatedImages: string[] = [];
  
    for (const image of images) {
      const imageUrl = `${oldImgHost}/${slug}/${image}`;
      const imageSavePath = path.join(imageDir, image);
  
      try {
        console.log(`Downloading image: ${imageUrl}`);
        const imageBuffer = await downloadImage(imageUrl);
        
        console.log(`Optimizing image: ${image}`);
        const optimizedImage = await optimizeImage(imageBuffer);
  
        console.log(`Saving image to: ${imageSavePath}`);
        await saveImageToDisk(optimizedImage, imageSavePath);
  
        // Add the saved image path to the product's updatedImages array
        updatedImages.push(imageSavePath);
      } catch (error: any) {
        console.error(`Error processing image ${image}: ${error.message}`);
      }
    }
  
    // Update the product's images array with the new paths of successfully processed images
    product.images = updatedImages;
  };
  
  // Main function to process all products
  const processAllProducts = async (): Promise<void> => {
    // Read and parse the products file
    const productsData: Product[] = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));
  
    // Process each product and update its images
    for (const product of productsData) {
      console.log(`Processing product: ${product.sku}`);
      await processProductImages(product);
    }
  
    // Save the updated products data back to the file
    fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
    console.log('All products processed and saved.');
  };
  
  // Run the script
  processAllProducts().catch((error: any) => {
    console.error(`Error processing products: ${error.message}`);
  }); */
  