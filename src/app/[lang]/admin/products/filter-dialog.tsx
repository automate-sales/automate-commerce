import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface FilterDialogProps {
  filters: Record<string, string[]>
  onApplyFilters: (filters: Record<string, string[]>) => void
}

export function FilterDialog({ filters, onApplyFilters }: FilterDialogProps) {
  const [localFilters, setLocalFilters] = useState(filters)

  const handleFilterChange = (field: string, value: string) => {
    setLocalFilters(prev => ({
      ...prev,
      [field]: value ? [value] : [],
    }))
  }

  const handleApply = () => {
    onApplyFilters(localFilters)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Products</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="status" className="text-right">
              Status
            </label>
            <Input
              id="status"
              value={localFilters.status?.[0] || ''}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="subcategory" className="text-right">
              Subcategory
            </label>
            <Input
              id="subcategory"
              value={localFilters.subcategory?.[0] || ''}
              onChange={(e) => handleFilterChange('subcategory', e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <Button onClick={handleApply}>Apply Filters</Button>
      </DialogContent>
    </Dialog>
  )
}

