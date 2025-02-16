"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Radio = () => {
  const router = useRouter()

  // Scroll to specific sections
  const navigateToSection = (hash: string) => {
    router.push(hash) // Navigates with hash
  }

  return (
    <div className="flex space-x-2 border-[3px] border-orange-400 rounded-xl select-none">
      {/* Home */}
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input type="radio" name="radio" className="peer hidden" defaultChecked />
        <span className="tracking-widest peer-checked:bg-orange-500 peer-checked:text-white text-gray-700 p-2 rounded-lg transition">Home</span>
      </label>

      {/* Schemes Section */}
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer" onClick={() => navigateToSection("#schemes")}>
        <input type="radio" name="radio" className="peer hidden" />
        <span className="tracking-widest peer-checked:bg-orange-500 peer-checked:text-white text-gray-700 p-2 rounded-lg transition">Schemes</span>
      </label>

      {/* Compare Policies Section */}
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer" onClick={() => navigateToSection("#compare-policies")}>
        <input type="radio" name="radio" className="peer hidden" />
        <span className="tracking-widest peer-checked:bg-orange-500 peer-checked:text-white text-gray-700 p-2 rounded-lg transition">Compare Policies</span>
      </label>

      {/* Footer (About Section) */}
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <Link href={"/about"}>

          <input type="radio" name="radio" className="peer hidden" />
          <span className="tracking-widest peer-checked:bg-orange-500 peer-checked:text-white text-gray-700 p-2 rounded-lg transition">About</span></Link>
      </label>
    </div>
  )
}

export default Radio
