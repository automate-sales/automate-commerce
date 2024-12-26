import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ColumnSelectorProps {
  columns: readonly string[]
  visibleColumns: string[]
  onColumnToggle: (columns: string[]) => void
}

export function ColumnSelector({ columns, visibleColumns, onColumnToggle }: ColumnSelectorProps) {
  const [localVisibleColumns, setLocalVisibleColumns] = useState(visibleColumns)

  const handleColumnToggle = (column: string) => {
    const updatedColumns = localVisibleColumns.includes(column)
      ? localVisibleColumns.filter(c => c !== column)
      : [...localVisibleColumns, column]
    setLocalVisibleColumns(updatedColumns)
  }

  const handleApply = () => {
    onColumnToggle(localVisibleColumns)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Columns</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 bg-white">
        <div className="space-y-2">
          {columns.map((column) => (
            <div key={column} className="flex items-center space-x-2">
              <Checkbox
                id={`column-${column}`}
                checked={localVisibleColumns.includes(column)}
                onCheckedChange={() => handleColumnToggle(column)}
              />
              <label htmlFor={`column-${column}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {column}
              </label>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full" onClick={handleApply}>Apply</Button>
      </PopoverContent>
    </Popover>
  )
}

