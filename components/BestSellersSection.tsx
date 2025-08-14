import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart } from 'lucide-react';
import productImage1 from '/p1.jpg';
import productImage2 from '/p2.jpg';
import productImage3 from '/p3.jpg';

const bestSellers = [
  {
    id: 1,
    name: 'ALOHA Botanical Shampoo',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    image: productImage1,
    description: 'Gentle cleansing with botanical extracts',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'ALOHA Nourishing Conditioner',
    price: 38,
    originalPrice: 45,
    rating: 4.9,
    reviews: 189,
    image: productImage2,
    description: 'The benefit of wheat protein for stronger hair',
    badge: 'New'
  },
  {
    id: 3,
    name: 'ALOHA Botanical Hair Oil',
    price: 52,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: productImage3,
    description: '18+ herbs blend with carrier oils and vitamins',
    badge: 'Editor\'s Pick'
  },
  {
    id: 4,
    name: 'Complete Hair Care Ritual',
    price: 120,
    originalPrice: 140,
    rating: 4.9,
    reviews: 67,
    image: productImage1,
    description: 'Full botanical hair care collection',
    badge: 'Value Set'
  }
];

export default function BestSellersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % bestSellers.length;
      products.push(bestSellers[index]);
    }
    return products;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-swan-warm-ivory/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-swan-forest-canopy mb-6">
            Best Sellers
          </h2>
          <p className="text-swan-botanical-charcoal/70 max-w-2xl mx-auto text-lg">
            Discover why these botanical beauties have captured the hearts of our community. 
            Each product is crafted with nature's finest ingredients.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-swan-serene-mint transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} className="text-swan-forest-canopy" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-swan-serene-mint transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} className="text-swan-forest-canopy" />
          </motion.button>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {getVisibleProducts().map((product, index) => (
              <motion.div
                key={`${product.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs text-white ${
                      product.badge === 'Best Seller' ? 'bg-swan-leaf-green' :
                      product.badge === 'New' ? 'bg-swan-blush-pink' :
                      product.badge === 'Editor\'s Pick' ? 'bg-swan-golden-sand' :
                      'bg-swan-sage-green'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      size={18}
                      className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-swan-botanical-charcoal/60'}
                    />
                  </button>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      className="opacity-0 group-hover:opacity-100 bg-white text-swan-forest-canopy px-6 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:bg-swan-serene-mint"
                    >
                      <ShoppingCart size={18} />
                      Quick Add
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-swan-forest-canopy mb-2 group-hover:text-swan-leaf-green transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-swan-botanical-charcoal/60 text-sm mb-3">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-swan-botanical-charcoal/60 text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-swan-forest-canopy">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-swan-botanical-charcoal/40 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-swan-leaf-green text-white px-4 py-2 rounded-lg hover:bg-swan-forest-canopy transition-colors text-sm"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {bestSellers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-swan-leaf-green' : 'bg-swan-sage-green/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-swan-forest-canopy text-white px-8 py-4 rounded-lg hover:bg-swan-leaf-green transition-colors text-lg"
          >
            Shop All Best Sellers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}