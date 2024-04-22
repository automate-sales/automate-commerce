import Navbar from '../components/nav'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'
import prisma from '@/db'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser();
  let itemCount;
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
    itemCount = await prisma.cart.findUnique({
      where: { id: cartId },
      select: {
        _count: {
          select: {
            cartItems: {
              where: { qty: { gt: 0 } },
            },
          },
        },
      },
    });
  }
  return (
      <>
        <Navbar
          cartItemsCount={itemCount ? itemCount._count.cartItems : 0}
          user={user}
          categories={categories}
        />
        {children}
        <ToastContainer />
        <Footer />
      </>
  )
}
