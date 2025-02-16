import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scheme } from "@/types/Scheme"

export default function SchemeCards({ schemes, loading, error }: { schemes: Scheme[], loading: boolean, error: string }) {
  return (
    <section className="py-16 bg-white border-[3px] border-orange-400 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Schemes and Policies</h2>

        {loading && <p className="text-center text-gray-500">Loading schemes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.length > 0 ? schemes.map((scheme: Scheme, index: number) => (
              <Card key={index}>
                <CardHeader className="hover:bg-orange-500">
                  <CardTitle>{scheme.title}</CardTitle>
                  <Badge>{scheme.category}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardContent>
              </Card>
            )) : <p className="text-center text-gray-500 w-full">No schemes found.</p>}
          </div>
        )}
      </div>
    </section>
  )
}
