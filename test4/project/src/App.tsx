// import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ProductCarousel } from './components/product/ProductCarousel';
import { AnimatedSection } from './components/AnimatedSection';
import Spline from '@splinetool/react-spline';

function App() {
  const products = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Limited Edition Sneakers",
      price: "$299",
      description: "Premium handcrafted sneakers with unique design elements"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      name: "Urban Runner",
      price: "$189",
      description: "Lightweight performance shoes for the modern athlete"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      name: "Classic Series",
      price: "$159",
      description: "Timeless design meets contemporary comfort"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
      name: "Sport Elite",
      price: "$249",
      description: "Professional grade athletic footwear"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      name: "Lifestyle Plus",
      price: "$219",
      description: "Versatile shoes for both casual and active wear"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      <Spline
        scene="https://prod.spline.design/BAksTI6REJF2MnCw/scene.splinecode" 
      />


      <div className="relative">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-8 py-6"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">DesignerWear</span>
          </div>
          <nav>
            <ul className="flex gap-8 text-gray-300">
              <li className="cursor-pointer hover:text-cyan-400">Shop</li>
              <li className="cursor-pointer hover:text-cyan-400">Collections</li>
              <li className="cursor-pointer hover:text-cyan-400">About</li>
            </ul>
          </nav>
        </motion.header>

        <main className="px-8 py-16">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 text-5xl font-bold tracking-tight text-white"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Featured Collection
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-2xl text-lg text-gray-300"
              >
                Discover our latest designer pieces, crafted for the modern lifestyle
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ProductCarousel products={products} />
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}

export default App;