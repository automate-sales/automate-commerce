import { Prisma } from '@prisma/client'
import { ProductList } from './product-list'
import prisma from '@/db'

export const dynamic = 'force-dynamic'

type SortField = 'title' | 'price' | 'stock' | 'createdAt'

async function getProducts(
  query: string,
  page: number,
  pageSize: number,
  sortField: SortField,
  sortOrder: 'asc' | 'desc',
  filters: Record<string, string[]>
) {
  const where: Prisma.ProductWhereInput = {
    AND: [
      {
        OR: [
          { title: { string_contains: query } },
          { description: { string_contains: query } }
        ],
      },
      ...Object.entries(filters).map(([field, values]) => ({
        [field]: { in: values },
      })),
    ],
  }

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      include: {
        subcategory: true,
      },
      orderBy: { [sortField]: sortOrder },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.product.count({ where }),
  ])

  return { products, totalCount }
}

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: {
    q?: string
    page?: string
    pageSize?: string
    sortField?: SortField
    sortOrder?: 'asc' | 'desc'
    filters?: string
  }
}) {
  const query = searchParams.q ?? ''
  const page = parseInt(searchParams.page ?? '1', 10)
  const pageSize = parseInt(searchParams.pageSize ?? '10', 10)
  const sortField = (searchParams.sortField ?? 'createdAt') as SortField
  const sortOrder = (searchParams.sortOrder ?? 'desc') as 'asc' | 'desc'
  const filters = searchParams.filters ? JSON.parse(searchParams.filters) : {}

  const { products, totalCount } = await getProducts(query, page, pageSize, sortField, sortOrder, filters)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Product Management</h1>
      <ProductList
        initialProducts={products}
        totalCount={totalCount}
        initialPage={page}
        initialPageSize={pageSize}
        initialSortField={sortField}
        initialSortOrder={sortOrder}
        initialFilters={filters}
      />
    </div>
  )
}

