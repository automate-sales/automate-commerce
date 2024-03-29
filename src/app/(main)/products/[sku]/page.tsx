import ImageDipslay from '@/app/components/item/imageDisplay';
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Page({ params }: { params: { sku: string } }) {
  const productData = await prisma.product.findUnique({
    where: {
      sku: params.sku
    }
  }) as Product


  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <div>Breadcrumbs</div>
        <div>Share Buttons</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ImageDipslay product={productData} />
        <div>
          <h1 className="text-3xl font-bold">{productData?.title}</h1>
          <p className="text-xl my-2">{productData?.price}</p>
          <p className="mb-4">{productData?.description}</p>
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
            <input type="number" className="ml-4 p-2 border rounded" defaultValue={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
