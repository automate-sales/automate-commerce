import Link from 'next/link'
import Navbar from '../components/nav'
import { getCurrentUser } from '@/utils/auth'

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
        <footer className="p-4 bg-gray-800 text-white">
          <p>© {new Date().getFullYear()} Create Next App</p>
        </footer>
      </>
  )
}
