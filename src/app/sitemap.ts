import { MetadataRoute } from 'next'
import prisma from '@/db';

const SITE_ROOT = process.env.NEXT_PUBLIC_WEB_HOST;

const generateSiteMapEntry = (
  path: string,
  id: number,
  changeFrequency: string = 'yearly',
  priority: number = 1
) => {
  return {
    url: `${SITE_ROOT}/${path}/${id}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency,
    priority: priority,
    alternates: {
      languages: {
        es: `${SITE_ROOT}/es/${path}/${id}`
      },
    }
  };
};

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
