"use client"

import React from "react"
import { Input } from "@/components/ui/form/input"
import { Search as SearchIcon } from "lucide-react"

interface SearchProps {
  className?: string
  disabled?: boolean
}

const Search: React.FC<SearchProps> = ({ className, disabled }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <SearchIcon className="absolute left-3 h-5 w-5 text-gray-500" />
      <label htmlFor="search" className="sr-only">
        搜尋商品
      </label>
      <Input
        id="search"
        name="product_name"
        type="search"
        variant="search"
        placeholder="搜尋商品..."
        disabled={disabled}
        className="pl-10"
      />
    </div>
  )
}

export default Search
