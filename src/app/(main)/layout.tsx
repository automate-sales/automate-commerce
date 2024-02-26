import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <Link passHref href="/">
            <h1 className="text-xl font-bold">Create Next App</h1>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link passHref href="/products">Products</Link>
            </li>
            <li>
              <Link passHref href="/categories">Categories</Link>
            </li>
            <li>
              <Link passHref href="/subcategories">Subcategories</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="p-4 bg-gray-800 text-white">
          <p>© {new Date().getFullYear()} Create Next App</p>
        </footer>
      </>
  )
}
