import Navbar from '../components/nav'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'
import prisma from '@/db'
import { ToastContainer } from "react-toastify";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  const categories = await prisma.category.findMany({
    include: {
      subcategories: true
    },
    orderBy: {
      priority: 'asc'
    } 
  })
  return (
      <>
        <Navbar user={user} categories={categories}/>
        {children}
        <ToastContainer />
        <Footer />
      </>
  )
}
