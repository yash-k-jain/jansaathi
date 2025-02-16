"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SchemeCards from "./scheme-cards"
import { Scheme } from "@/types/Scheme"

export default function ComparisonTool() {
  const [age, setAge] = useState("")
  const [income, setIncome] = useState("")
  const [occupation, setOccupation] = useState("")
  const [schemes, setSchemes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function fetchSchemes(age: number, income: number, occupation: string) {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(`/api/query?age=${age}&annualIncome=${income}&occupation=${occupation}`)
      if (!response.ok) throw new Error("Failed to fetch schemes")

      const data = await response.json()
      console.log(data)
      setSchemes(data.schemes)
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const handleCompare = () => {
    if (!age || !income || !occupation) {
      setError("Please fill in all fields before comparing.")
      return
    }
    fetchSchemes(parseInt(age), parseInt(income), occupation)
  }

  return (
    <section id="compare-policies" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Compare Policies</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Find Suitable Schemes</CardTitle>
            <CardDescription>Enter your details to compare and find relevant policies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Income
                </label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter your annual income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <Select onValueChange={setOccupation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="salaried">Salaried Employee</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button onClick={handleCompare} className="w-full bg-[#138808] hover:bg-[#0f6606]" disabled={loading}>
                {loading ? "Loading..." : "Compare Policies"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {schemes.map((scheme: Scheme, index) => (
          <Card
            key={index}
            className="flex flex-col h-full border border-gray-300 shadow-md transition-transform hover:scale-105"
          >
            <CardHeader className="bg-orange-500 text-white p-4">
              <CardTitle className="text-lg font-bold">{scheme.title}</CardTitle>
              <Badge className="mt-2 bg-white text-orange-500">{scheme.category}</Badge>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow p-4">
              <CardDescription className="text-gray-700">{scheme.description}</CardDescription>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Age Range:</span> {scheme.age || "N/A"}</p>
                <p><span className="font-semibold">Premium:</span> {scheme.premium || "Not specified"}</p>
                <p><span className="font-semibold">Eligibility:</span> {scheme.eligibility}</p>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href={scheme.url || "#"}
                  className="block text-center w-full bg-orange-500 text-white font-semibold py-2 rounded-md transition hover:bg-orange-600 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See More
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

