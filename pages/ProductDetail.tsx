import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  Leaf, 
  ChevronLeft,
  ChevronRight,
  Share2,
  Info
} from 'lucide-react';
import productImage1 from '/p1.jpg';
import productImage2 from '/p2.jpg';
import productImage3 from '/p3.jpg';

// Mock product data
const products = {
  1: {
    id: 1,
    name: 'ALOHA Botanical Shampoo',
    category: 'Hair Care',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    images: [productImage1, productImage2, productImage3],
    description: 'Transform your hair care routine with our signature botanical shampoo, carefully crafted with nature\'s finest ingredients. This gentle yet effective formula cleanses while nourishing your hair with botanical extracts and natural proteins.',
    keyIngredients: [
      { name: 'Botanical Extracts', benefit: 'Nourishes and strengthens hair follicles' },
      { name: 'Natural Proteins', benefit: 'Repairs and protects hair structure' },
      { name: 'Essential Oils', benefit: 'Adds shine and natural fragrance' },
      { name: 'Vitamins A & E', benefit: 'Promotes healthy hair growth' }
    ],
    howToUse: [
      'Wet hair thoroughly with lukewarm water',
      'Apply a small amount of shampoo to scalp and roots',
      'Gently massage in circular motions for 1-2 minutes',
      'Rinse thoroughly and follow with conditioner'
    ],
    features: [
      'Sulfate-free formula',
      'Suitable for all hair types',
      'Cruelty-free and vegan',
      'Made with 85% natural ingredients'
    ],
    reviews: [
      {
        id: 1,
        name: 'Sarah M.',
        rating: 5,
        comment: 'This shampoo has transformed my hair! It feels so much healthier and stronger.',
        date: '2 weeks ago',
        verified: true
      },
      {
        id: 2,
        name: 'Emma L.',
        rating: 4,
        comment: 'Love the natural ingredients. My scalp feels so clean and refreshed.',
        date: '1 month ago',
        verified: true
      },
      {
        id: 3,
        name: 'Jessica K.',
        rating: 5,
        comment: 'Best shampoo I\'ve ever used. The botanical scent is amazing!',
        date: '3 weeks ago',
        verified: false
      }
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product - in real app this would come from API
  const product = products[1];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-swan-botanical-charcoal/60 mb-8"
        >
          <Link to="/" className="hover:text-swan-leaf-green">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-swan-leaf-green">Shop</Link>
          <span>/</span>
          <span className="text-swan-forest-canopy">{product.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <Heart
                  size={20}
                  className={isFavorite ? 'fill-red-500 text-red-500' : 'text-swan-botanical-charcoal/60'}
                />
              </button>

              {/* Share Button */}
              <button className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                <Share2 size={20} className="text-swan-botanical-charcoal/60" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-swan-leaf-green' 
                      : 'border-transparent hover:border-swan-sage-green/30'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category & Name */}
            <div>
              <span className="text-swan-sage-green text-sm tracking-wide uppercase">
                {product.category}
              </span>
              <h1 className="text-4xl text-swan-forest-canopy mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-swan-botanical-charcoal/70">
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl text-swan-forest-canopy">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-swan-botanical-charcoal/40 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-swan-botanical-charcoal/70 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Leaf size={16} className="text-swan-leaf-green" />
                  <span className="text-sm text-swan-botanical-charcoal/70">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-swan-forest-canopy">Quantity:</span>
                <div className="flex items-center border border-swan-sage-green/20 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-swan-serene-mint/30 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[50px]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-swan-serene-mint/30 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-swan-leaf-green text-white py-4 rounded-lg hover:bg-swan-forest-canopy transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <ShoppingBag size={20} />
                Add to Cart - ${product.price * quantity}
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-swan-sage-green/20">
              <div className="flex flex-col items-center text-center">
                <Truck className="text-swan-leaf-green mb-2" size={24} />
                <span className="text-xs text-swan-botanical-charcoal/70">Free Shipping Over $75</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="text-swan-leaf-green mb-2" size={24} />
                <span className="text-xs text-swan-botanical-charcoal/70">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="text-swan-leaf-green mb-2" size={24} />
                <span className="text-xs text-swan-botanical-charcoal/70">Natural Ingredients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="border-b border-swan-sage-green/20">
            <nav className="flex">
              {[
                { id: 'description', label: 'Description' },
                { id: 'ingredients', label: 'Ingredients' },
                { id: 'howto', label: 'How to Use' },
                { id: 'reviews', label: `Reviews (${product.reviews.length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-swan-forest-canopy bg-swan-serene-mint/20'
                      : 'text-swan-botanical-charcoal/70 hover:text-swan-leaf-green hover:bg-swan-serene-mint/10'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-swan-leaf-green"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <p className="text-swan-botanical-charcoal/70 leading-relaxed">
                  {product.description}
                </p>
                <h4 className="text-swan-forest-canopy mt-6 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Leaf size={16} className="text-swan-leaf-green" />
                      <span className="text-swan-botanical-charcoal/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h4 className="text-swan-forest-canopy mb-4">Key Ingredients & Benefits:</h4>
                <div className="grid gap-4">
                  {product.keyIngredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-swan-serene-mint/10 rounded-lg">
                      <Info size={20} className="text-swan-leaf-green mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="text-swan-forest-canopy mb-1">{ingredient.name}</h5>
                        <p className="text-swan-botanical-charcoal/70 text-sm">{ingredient.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'howto' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h4 className="text-swan-forest-canopy mb-4">How to Use:</h4>
                <div className="space-y-3">
                  {product.howToUse.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-swan-leaf-green text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-swan-botanical-charcoal/70 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-swan-forest-canopy">Customer Reviews</h4>
                  <button className="text-swan-leaf-green hover:text-swan-forest-canopy text-sm">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-swan-sage-green/20 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-swan-forest-canopy">{review.name}</span>
                          {review.verified && (
                            <span className="text-xs bg-swan-leaf-green text-white px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-swan-botanical-charcoal/60">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                      
                      <p className="text-swan-botanical-charcoal/70">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}