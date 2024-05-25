
import AddToCartButton from '@/app/[lang]/components/cart/add';
import ImageDipslay from '@/app/[lang]/components/item/imageDisplay';
import { Product } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';

export default async function Page({ 
  params 
}: { 
  params: { sku: string, lang:string } 
}) {
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
          <h1 className="text-3xl font-bold">{getIntl(productData?.title, params.lang)}</h1>
          <p className="text-xl my-2">{productData?.price}</p>
          <p className="mb-4">{getIntl(productData?.description, params.lang)}</p>
          <div className="flex items-center">
            <AddToCartButton cartId={""} productId={productData?.id} productPrice={productData?.price}/>
            {/* <button onClick={() => toast.success("Item added to cart.")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button> */}
            <input type="number" className="ml-4 p-2 border rounded" defaultValue={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
