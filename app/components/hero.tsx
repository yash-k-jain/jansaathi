import Search from "./Search";

export default function Hero() {
  return (
    // <section className="bg-[#FF9933] text-white py-20">
    <section className="tricolor text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Government Schemes and Policies</h1>
        <p className="text-xl mb-8">Find the right programs to support your needs</p>
        <Search />
      </div>
    </section>
  )
}

