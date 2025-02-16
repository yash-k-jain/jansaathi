"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const Search = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (query.trim()) {
            router.push(`/?query=${encodeURIComponent(query)}`) // Redirect with query
        }
    }

    return (
        <div className="max-w-md mx-auto flex">
            <form onSubmit={handleSearch} className="flex">
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"
                    placeholder="Search schemes and policies"
                    className="flex-grow bg-white text-gray-800"
                />
                <Button type="submit" className="mx-2 sbutton">
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </form>
        </div>
    )
}

export default Search
