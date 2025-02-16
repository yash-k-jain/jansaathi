"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Radio2 from "./radio2"



export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Government of India Emblem" className="h-12 w-auto" />
          <span className="text-xl font-semibold text-gray-800">Government of India</span>
        </Link>
        <nav>
        <Radio2/>
        </nav>
        <Button className="sbutton">Login</Button>
      </div>
    </header>
  )
}

