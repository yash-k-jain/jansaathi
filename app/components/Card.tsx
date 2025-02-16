import { Scheme } from "@/types/Scheme";
import Link from "next/link";

export default function Card({ scheme }: { scheme: Scheme }) {
  return (
    <div className="w-full max-w-xs p-4">
      <div className="relative flex flex-col h-full bg-white border-2 border-gray-300 shadow-lg transition-all duration-300 hover:scale-105">
        {/* Category Box */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-white border border-orange-500 text-orange-500 text-xs font-semibold uppercase shadow-md">
          {scheme.category}
        </div>

        {/* Content Box */}
        <div className="flex flex-col flex-grow p-6 bg-orange-500 text-white">
          <h3 className="text-lg font-bold">{scheme.title}</h3>
          <p className="mt-2 text-sm opacity-90 flex-grow">{scheme.description}</p>
        </div>

        {/* Link */}
        <div className="p-4 bg-gray-100">
          <Link
            href={scheme.url!}
            className="inline-block w-full text-center py-2 text-sm font-semibold text-orange-600 bg-white border border-orange-500 rounded-md transition hover:bg-orange-500 hover:text-white"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
