
import AddToCartButton from '@/app/[lang]/components/cart/add';
import ImageDipslay from '@/app/[lang]/components/item/imageDisplay';
import { Product } from '@prisma/client'
import prisma from '@/db'
import { getIntl } from '@/utils/utils';
import { cookies } from 'next/headers';

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
  const cookieStore = cookies()
  const visitorId = cookieStore.get('ergo_lead_id')?.value
  const cartId = cookieStore.get('ergo_cart_id')?.value || ''

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
          <AddToCartButton cartId={cartId} productId={productData?.id} productPrice={productData?.price} productSku={productData.sku} displayQty/>
        </div>
      </div>
    </div>
  );
};
