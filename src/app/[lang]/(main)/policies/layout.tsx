import { usePathname } from 'next/navigation';

export default async function PoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="px-32 pt-20">
        {children}
      </div>
  )
}
