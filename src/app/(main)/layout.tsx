import Link from 'next/link'
import Navbar from '../components/nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <Navbar />
        {children}
        <footer className="p-4 bg-gray-800 text-white">
          <p>© {new Date().getFullYear()} Create Next App</p>
        </footer>
      </>
  )
}
