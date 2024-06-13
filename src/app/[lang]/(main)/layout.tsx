import Navbar from '../components/navmod'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'
import prisma from '@/db'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import { getDictionary } from '@/app/dictionaries'
import locales from '@/utils/locales';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: string}
}) {
  const dict = await getDictionary(params.lang);
  const user = await getCurrentUser();
  let itemCount = 0;
  const categories = await prisma.category.findMany({
    include: {
      subcategories: true,
    },
    orderBy: {
      priority: "asc",
    },
  });
  const cookieStore = cookies();
  const cartId = cookieStore.get("ergo_cart_id")?.value;
 
  if (cartId) {
    const items = await prisma.cart.findUnique({
      where: { id: cartId },
      select: {
        cartItems: {
          where: { qty: { gt: 0 } },
        },
      },
    });
    if(items) {
      itemCount = items.cartItems.reduce((acc, curr) => acc + curr.qty, 0);
    }
    
  }
  return (
    <>
      <Navbar
        search={true}
        user={user}
        categories={categories}
        links={[
          {id: '1', label: 'Blog', type: 'link', url: '/blog'},
          {id: '2', label: 'Soporte', type: 'dropdown', options: [
            {id: '1', label: 'FAQ', url: '/faq'},
            {id: '2', label: 'Entregas', url: '/policies/delivery'},
            {id: '3', label: 'Devoluciones', url: '/policies/returns'},
            {id: '4', label: 'Cancelaciones', url: '/policies/cancellation'},
            {id: '5', label: 'Contacto', url: '/contact'},
          ]}
        ]}
        languages={locales}
        cartLength={itemCount}
      />
      <div className='pt-16'>{children}</div>
      <ToastContainer/>
      <Footer params={params}/>
    </>
  );
}
