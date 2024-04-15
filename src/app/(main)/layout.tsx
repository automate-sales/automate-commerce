import Link from 'next/link'
import Navbar from '../components/nav'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  return (
      <>
        <Navbar user={user} />
        {children}
        <Footer />
      </>
  )
}
