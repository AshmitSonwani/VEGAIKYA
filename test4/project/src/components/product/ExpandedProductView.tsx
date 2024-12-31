import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { buttonHover, fadeInUp } from '../animations/variants';
import { ProductImageViewer } from './ProductImageViewer';
import { ProductActions } from './ProductActions';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}

interface ExpandedProductViewProps {
  products: Product[];
  initialProductIndex: number;
  onClose: () => void;
}

export function ExpandedProductView({ products, initialProductIndex, onClose }: ExpandedProductViewProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialProductIndex);
  const currentProduct = products[currentIndex];

  const handleNavigate = (direction: 'next' | 'prev') => {
    setCurrentIndex(current => {
      if (direction === 'next') {
        return (current + 1) % products.length;
      }
      return (current - 1 + products.length) % products.length;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-[600px]">
            <ProductImageViewer
              products={products}
              currentIndex={currentIndex}
              onNavigate={handleNavigate}
              productName={currentProduct.name}
            />
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg z-10"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="p-8 flex flex-col">
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentProduct.name}</h2>
                <p className="text-2xl text-cyan-600 font-semibold">{currentProduct.price}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{currentProduct.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Premium materials</li>
                    <li>• Handcrafted details</li>
                    <li>• Limited edition design</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <ProductActions
              onAddToCart={() => console.log('Added to cart')}
              onAddToWishlist={() => console.log('Added to wishlist')}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}