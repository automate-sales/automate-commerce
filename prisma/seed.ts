import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}`});

import { Category, PrismaClient, Product, Subcategory } from "@prisma/client"
import categories from "../data/categories.json"
import subcategories from "../data/subcategories.json"
import products from "../data/products.json";

import { createPublicBucket, uploadImageFromURL, wipeS3Bucket } from "../src/utils/s3";
const prisma = new PrismaClient()

const bucketName = `${process.env.PROJECT_NAME}-media`
console.log('bucketName', bucketName)
const oldImgHost = 'https://d1tnzngtf1n4as.cloudfront.net/public'

async function wipeRelatedEntities() {
  console.log('Wiping related entities')
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.user.deleteMany();
  await prisma.session.deleteMany();
}

async function wipeProductsSubcategoriesAndCategories() {
  console.log('Wiping products')
  await prisma.product.deleteMany();
  console.log('Wiping subcategories')
  await prisma.subcategory.deleteMany();
  console.log('Wiping categories')
  await prisma.category.deleteMany();
  return true
}

function datify(arr: {createdAt: string, updatedAt: string, [key: string]: any }[]) {
  return arr.map(obj => {
      return {
          ...obj,
          createdAt: new Date(obj.createdAt),
          updatedAt: new Date(obj.updatedAt)
      };
  });
}

async function seedCategories() {
  const createCategoryPromises = datify(categories).map(async (c: Category ) => {
    //c.subcategories && delete c.subcategories;
    await prisma.category.create({ data: c });
    return Promise.all(c.images.map((i: string) => {
      return uploadImageFromURL(
        bucketName,
        `${oldImgHost}/categories/${i}`,
        `categories/${i}`
      );
    }));
  });
  return await Promise.all(createCategoryPromises);
}

async function seedSubcategories() {
  const createSubcategoryPromises = datify(subcategories).map(async (s: Subcategory ) => {
    //s.category && delete s.category;
    await prisma.subcategory.create({ data: s });
    return Promise.all(s.images.map((i: string) => {
      return uploadImageFromURL(
        bucketName,
        `${oldImgHost}/subcategories/${i}`,
        `subcategories/${i}`
      );
    }));
  });
  return await Promise.all(createSubcategoryPromises);
}

async function seedProducts() {
  const createProductPromises = datify(products).map(async (p: Product ) => {
    await prisma.product.create({ data: p });
    return Promise.all(p.images.map((i: string) => {
      return uploadImageFromURL(
        bucketName,
        `${oldImgHost}/products/${i}`,
        `products/${i}`
      );
    }));
  });
  return await Promise.all(createProductPromises);
}

async function wipeData() {
  //await prisma.cartItem.deleteMany();
  return await Promise.all([
    wipeRelatedEntities(),
    wipeProductsSubcategoriesAndCategories(),
    wipeS3Bucket(bucketName)
  ]);
}

async function seedData() {
  await seedCategories();
  await seedSubcategories();
  await seedProducts();
}

async function seedTestData() {
  const qtys = {
      //shop
      'chair-vergex-bl': 0,
      'monitor-lg-20mk400h-bl': 0,
      'chair-xtc-gr': 1,
      'chair-stackx-bl': 2,
      'chair-axis-wh': 3,
      'stand-arm-alum-single-bl': 20,
      'stand-arm-alum-double-gr': 18,
      'stand-laptop-adjus-sl': 30,
      //order
      'chair-gamer-prodigy-gr': 4,
      'frame-3stage-wh': 5,
      'footrest-1-wh': 3
  };
  const qtyPromises = Object.entries(qtys).map(async ([q, qty]) => {
      console.log(q, qty);
      await prisma.product.update({
          where:{sku: q},
          data: {stock: qty}
      });
  });
  const prices = {
      'footrest-1-wh': 0.72,
  };
  const pricePromises = Object.entries(prices).map(async ([p, price]) => {
      console.log(p, price);
      await prisma.product.update({
          where:{sku: p},
          data: {price: price}
      });
  });
  const users = [
      {
        name: "John Doe",
        email: "johndoe@doejohn.com"
      }
  ];
  const userPromises = users.map(async (u) => {
      await prisma.user.create({data: u});
  });
  await Promise.all([...qtyPromises, ...pricePromises, ...userPromises]);
}

async function main() {
  try{
    if (NODE_ENV !== 'production') {
      await createPublicBucket(bucketName)
    }
    await wipeData()
    await seedData()
    await seedTestData()
  } catch(err) {
    console.error(err)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })