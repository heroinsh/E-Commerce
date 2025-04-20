"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function ProductSort() {
  const [sortOption, setSortOption] = useState("پرفروش‌ترین")

  const sortOptions = ["پرفروش‌ترین", "جدیدترین", "ارزان‌ترین", "گران‌ترین", "پربازدیدترین", "محبوب‌ترین"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto justify-between">
          <span>مرتب‌سازی: {sortOption}</span>
          <ChevronDown className="h-4 w-4 mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option}
            className={sortOption === option ? "bg-muted" : ""}
            onClick={() => setSortOption(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

