'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Product, Subcategory } from '@prisma/client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { ProductCard } from './product-card'
import { DeleteProductDialog } from './delete-product-dialog'
import { ColumnSelector } from './column-selector'
import { FilterDialog } from './filter-dialog'
import { Pagination } from './pagination'

type ProductWithRelations = Product & {
  subcategory: Subcategory
}

type SortField = 'title' | 'price' | 'stock' | 'createdAt'

const allColumns = [
  'id',
  'title',
  'description',
  'price',
  'stock',
  'images',
  'subcategory',
  'tags',
  'status',
  'createdAt',
] as const

type ColumnName = typeof allColumns[number]

export function ProductList({
  initialProducts,
  totalCount,
  initialPage,
  initialPageSize,
  initialSortField,
  initialSortOrder,
  initialFilters,
}: {
  initialProducts: ProductWithRelations[]
  totalCount: number
  initialPage: number
  initialPageSize: number
  initialSortField: SortField
  initialSortOrder: 'asc' | 'desc'
  initialFilters: Record<string, string[]>
}) {
  const [products, setProducts] = useState(initialProducts)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sortField, setSortField] = useState<SortField>(initialSortField)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder)
  const [filters, setFilters] = useState(initialFilters)
  const [visibleColumns, setVisibleColumns] = useState<ColumnName[]>(allColumns)

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('page', page.toString())
    newSearchParams.set('pageSize', pageSize.toString())
    newSearchParams.set('sortField', sortField)
    newSearchParams.set('sortOrder', sortOrder)
    newSearchParams.set('filters', JSON.stringify(filters))
    router.push(`/admin/products?${newSearchParams.toString()}`)
  }, [page, pageSize, sortField, sortOrder, filters, router, searchParams])

  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('q', searchQuery)
    newSearchParams.set('page', '1')
    router.push(`/admin/products?${newSearchParams.toString()}`)
  }

  const handleSort = (field: SortField) => {
    setSortField(field)
    setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc')
    setPage(1)
  }

  const handleDelete = (id: string) => {
    setProducts(products.filter(product => product.id !== id))
    setSelectedProducts(selectedProducts.filter(productId => productId !== id))
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map(product => product.id))
    }
  }

  const handleSelect = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(productId => productId !== id))
    } else {
      setSelectedProducts([...selectedProducts, id])
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="flex gap-2">
          <FilterDialog filters={filters} onApplyFilters={setFilters} />
          <ColumnSelector
            columns={allColumns}
            visibleColumns={visibleColumns}
            onColumnToggle={setVisibleColumns}
          />
          <DeleteProductDialog
            selectedProducts={selectedProducts}
            onDelete={(ids) => {
              setProducts(products.filter(product => !ids.includes(product.id)))
              setSelectedProducts([])
            }}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedProducts.length === products.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            {visibleColumns.includes('id') && <TableHead>ID</TableHead>}
            {visibleColumns.includes('title') && (
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('title')}>
                  Title {sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
            )}
            {visibleColumns.includes('description') && <TableHead>Description</TableHead>}
            {visibleColumns.includes('price') && (
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('price')}>
                  Price {sortField === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
            )}
            {visibleColumns.includes('stock') && (
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('stock')}>
                  Stock {sortField === 'stock' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
            )}
            {visibleColumns.includes('images') && <TableHead>Images</TableHead>}
            {visibleColumns.includes('subcategory') && <TableHead>Subcategory</TableHead>}
            {visibleColumns.includes('tags') && <TableHead>Tags</TableHead>}
            {visibleColumns.includes('status') && <TableHead>Status</TableHead>}
            {visibleColumns.includes('createdAt') && (
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('createdAt')}>
                  Created At {sortField === 'createdAt' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
            )}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selected={selectedProducts.includes(product.id)}
              onSelect={() => handleSelect(product.id)}
              onDelete={() => handleDelete(product.id)}
              visibleColumns={visibleColumns}
            />
          ))}
        </TableBody>
      </Table>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalCount / pageSize)}
        onPageChange={setPage}
      />
    </div>
  )
}

