"use client"

import React, { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import SchemeCards from "../components/scheme-cards"

const Page = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || "" // Get query from URL
  const schemesRef = useRef<HTMLDivElement | null>(null)

  const [schemes, setSchemes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchSchemes(query)
  }, [query])

  useEffect(() => {
    // Scroll if hash is present in URL
    if (window.location.hash === "#schemes" && schemesRef.current) {
      setTimeout(() => {
        schemesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 300) // Small delay to allow page load
    }
  }, [])

  const fetchSchemes = async (searchQuery: string) => {
    setLoading(true)
    setError("")
    setSchemes([])

    const endpoint = searchQuery ? `/api/search?query=${encodeURIComponent(searchQuery)}` : "/api/chatbot"

    try {
      const response = await axios.get(endpoint)
      setSchemes(response.data.schemes)
      console.log(response.data.schemes)
    } catch (error) {
      console.error("Error fetching schemes:", error)
      setError("Failed to load schemes. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="#schemes">
      <h1 className="text-2xl font-bold mb-4 text-center my-3">Schemes</h1>

      {query && <p>Showing results for: <strong>{query}</strong></p>}

      <SchemeCards schemes={schemes} loading={loading} error={error} />
    </div>
  )
}

export default Page
