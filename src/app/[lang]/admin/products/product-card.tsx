import Link from 'next/link'
import { Product, Subcategory } from '@prisma/client'
import { TableCell, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const formatDate =(date: string | number | Date) => {
    return new Date(date).toLocaleDateString()
}

type ProductWithRelations = Product & {
  subcategory: Subcategory
}

interface ProductCardProps {
  product: ProductWithRelations
  selected: boolean
  onSelect: () => void
  onDelete: () => void
  visibleColumns: string[]
}

const model = 'product'
export function ProductCard({ product, selected, onSelect, onDelete, visibleColumns }: ProductCardProps) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={selected} onCheckedChange={onSelect} />
      </TableCell>
      {visibleColumns.includes('id') && <TableCell>{product.id}</TableCell>}
      {visibleColumns.includes('title') && (
        <TableCell>
          <Link href={`/admin/products/${product.id}`} className="hover:underline">
            {product.title?.en}
          </Link>
        </TableCell>
      )}
      {visibleColumns.includes('description') && <TableCell>{product.description?.en.slice(0, 50)}...</TableCell>}
      {visibleColumns.includes('price') && <TableCell>${product.price.toFixed(2)}</TableCell>}
      {visibleColumns.includes('stock') && <TableCell>{product.stock}</TableCell>}
      {visibleColumns.includes('images') && (
        <TableCell>
          {product.images.length > 0 ? (
            <div>

              <Image src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${model}s/${product.images[0]}`} alt={`product image`} width={64} height={64} />
              {product.images.length > 1 && (
                <span className="text-xs text-gray-500">+{product.images.length - 1} more</span>
              )}
            </div>
          ) : (
            'No images'
          )}
        </TableCell>
      )}
      {visibleColumns.includes('subcategory') && <TableCell>{product.subcategory.name}</TableCell>}
      {visibleColumns.includes('status') && <TableCell>{product.status}</TableCell>}
      {visibleColumns.includes('createdAt') && <TableCell>{formatDate(product.createdAt)}</TableCell>}
      <TableCell>
        <Button variant="destructive" size="sm" onClick={onDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}

