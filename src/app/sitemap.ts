import { Category, Subcategory, Product } from '@prisma/client';
import { MetadataRoute } from 'next'
import prisma from '@/db';

const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

const generateSiteMapEntry = (
  path: string, 
  id: number,
  changeFrequency: string='yearly',
  priority: number=1
) => {
  return {
    url: `${SITE_ROOT}/${path}/${id}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency,
    priority: priority,
    /* alternates: {
      languages: {
        es: 'https://acme.com/es',
        de: 'https://acme.com/de',
      },
    }, */
  };
}

const generateSiteMap = (
    categories: Category[],
    subcategories: Subcategory[],
    products: Product[]
) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_ROOT}</loc>
    </url>
    <url>
      <loc>${SITE_ROOT}/cart</loc>
    </url>
    <url>
      <loc>${SITE_ROOT}/checkout</loc>
    </url>
    <url>
      <loc>${SITE_ROOT}/login</loc>
    </url>
    ${categories}
    ${subcategories.map((subcategory) => generateSiteMapEntry('subcategories', subcategory.id)).join('')}
    ${products.map((product) => generateSiteMapEntry('products', product.id)).join('')}
  </urlset>`;

  export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categoriesData = await prisma.category.findMany()
    const categories = categoriesData.map(category => generateSiteMapEntry('categories', category.id))
    const subcategoriesData = await prisma.subcategory.findMany();
    const subcategories = subcategoriesData.map(subcategory => generateSiteMapEntry('subcategories', subcategory.id, 'yearly', 0.8))
    const productsData = await prisma.product.findMany();
    const products = productsData.map(product => generateSiteMapEntry('products', product.id, 'weekly'))
    
    return [
      {
        url: SITE_ROOT,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${SITE_ROOT}/cart`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
      },
      {
        url: `${SITE_ROOT}/checkout`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
      },
      {
        url: `${SITE_ROOT}/login`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
      }
    ].concat(categories, subcategories, products) as MetadataRoute.Sitemap;
};
