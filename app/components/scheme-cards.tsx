import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scheme } from "@/types/Scheme"
import { Link } from "lucide-react"
import Loader from "@/components/ui/skeleton"

export default function SchemeCards({ schemes, loading, error }: { schemes: Scheme[], loading: boolean, error: string }) {
  return (
    <section className="py-16 bg-white border-[3px] border-orange-400 rounded-xl m-3">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Schemes and Policies</h2>

        {loading && <p className="text-center flex gap-6 text-gray-500">{[1, 2, 3, 4, 5, 6, 7].map((number: number) => <Loader key={number} />)}</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {schemes.length > 0 ? schemes.map((scheme: Scheme, index: number) => (
              <Card key={index} className="flex flex-col h-full border border-gray-300 shadow transition-transform hover:scale-105">
                {/* Header */}
                <CardHeader className="bg-orange-500 text-white p-4">
                  <CardTitle className="text-lg font-bold">{scheme.title}</CardTitle>
                  <Badge className="mt-2 bg-white text-orange-500">{scheme.category}</Badge>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex flex-col flex-grow p-4">
                  <CardDescription className="text-gray-700">{scheme.description}</CardDescription>

                  {/* Extra Details */}
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Age Range:</span> {scheme.age || "N/A"}</p>
                    <p><span className="font-semibold">Premium:</span> {scheme.premium || "Not specified"}</p>
                    <p><span className="font-semibold">Eligibility:</span> {scheme.eligibility}</p>
                  </div>

                  {/* Button */}
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
            )) : <p className="text-center text-gray-500 w-full">No schemes found.</p>}
          </div>
        )}
      </div>
    </section>
  )
}
