import Navbar from '../components/nav'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'
import prisma from '@/db'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import { getDictionary } from '@/app/dictionaries'
import { get } from 'http';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
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
        cartItemsCount={itemCount}
        user={user}
        categories={categories}
        dict={dict}
      />
      {children}
      <ToastContainer/>
      <Footer params={params}/>
    </>
  );
}
