// Popular.tsx
'use client'

import Image from 'next/image'

const popularProducts = [
  {
    id: 1,
    title: 'Organic Coconut Sugar',
    description: 'Premium grade organic coconut sugar with rich caramel notes',
    image: '/product1.jpg',
    isNew: true,
  },
  {
    id: 2,
    title: 'Green Coffee Beans',
    description: 'Single-origin Arabica green coffee beans from Indonesian highlands',
    image: '/product2.jpg',
    isNew: true,
  },
  {
    id: 3,
    title: 'Coconut Fiber',
    description: 'High-quality coconut fiber for industrial and agricultural use',
    image: '/product3.jpg',
    isNew: false,
  },
  {
    id: 4,
    title: 'Coconut Charcoal Briquettes',
    description: 'Long-burning coconut shell charcoal briquettes',
    image: '/product4.jpg',
    isNew: false,
  },
]

export default function Popular() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 group">
          <h2 className="text-3xl md:text-4xl font-bold font-gudea text-center text-black">
            Popular Products
          </h2>
          {/* Animated underline */}
          <div className="relative mt-4 w-full">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-[#E59D00] group-hover:w-full transition-all duration-700 ease-in-out" />
            <div className="w-full h-0.5 bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* New Label */}
              {product.isNew && (
                <div className="absolute top-3 right-3 bg-[#E59D00] text-white px-2 py-1 rounded-full text-xs font-gudea z-10">
                  New
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden"> {/* Changed from h-48 to h-64 */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#E59D00] text-white px-6 py-2.5 rounded-md text-sm font-gudea transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6"> {/* Changed from p-4 to p-6 */}
                <h3 className="text-xl font-bold font-gudea mb-2 text-gray-600"> {/* Changed from text-lg to text-xl and mb-1 to mb-2 */}
                  {product.title}
                </h3>
                <p className="text-[#FF7272] font-gudea text-sm"> {/* Changed from text-xs to text-sm */}
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}