import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Heart, ShoppingBag } from 'lucide-react';
import productImage1 from '/p1.jpg';
import productImage2 from '/p2.jpg';
import productImage3 from '/p3.jpg';

const categories = ['All Products', 'Hair Care', 'Skincare', 'Body Care', 'Collections'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Selling'];

const products = [
  {
    id: 1,
    name: 'ALOHA Botanical Shampoo',
    category: 'Hair Care',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    image: productImage1,
    description: 'Gentle cleansing shampoo infused with botanical extracts and natural proteins.',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 2,
    name: 'ALOHA Nourishing Conditioner',
    category: 'Hair Care',
    price: 38,
    originalPrice: 45,
    rating: 4.9,
    reviews: 189,
    image: productImage2,
    description: 'The benefit of wheat protein for deeply nourished and strengthened hair.',
    isNew: true,
    isBestSeller: false
  },
  {
    id: 3,
    name: 'ALOHA Botanical Hair Oil',
    category: 'Hair Care',
    price: 52,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: productImage3,
    description: 'Luxurious hair oil blend with 18+ herbs, 6 carrier oils, 5 essential oils, and 2 vitamins.',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Botanical Scalp Treatment',
    category: 'Hair Care',
    price: 65,
    originalPrice: null,
    rating: 4.6,
    reviews: 98,
    image: productImage1,
    description: 'Intensive scalp treatment to balance and nourish hair follicles.',
    isNew: false,
    isBestSeller: false
  },
  {
    id: 5,
    name: 'Complete Hair Care Set',
    category: 'Collections',
    price: 120,
    originalPrice: 140,
    rating: 4.9,
    reviews: 67,
    image: productImage1,
    description: 'Our complete hair care routine in one elegant collection.',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 6,
    name: 'ALOHA Leave-in Treatment',
    category: 'Hair Care',
    price: 48,
    originalPrice: null,
    rating: 4.8,
    reviews: 201,
    image: productImage3,
    description: 'Weightless leave-in treatment for all-day hair protection and shine.',
    isNew: true,
    isBestSeller: false
  }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory to-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-black/10 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-swan-forest-canopy mb-4">
            Shop Botanical Beauty
          </h1>
          <p className="text-swan-botanical-charcoal/70 max-w-2xl">
            Discover our complete collection of botanical hair care and skincare, crafted with nature's finest ingredients for your daily ritual.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Filters Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 mb-8 lg:mb-0"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
              <h3 className="text-swan-forest-canopy mb-4 flex items-center gap-2">
                <Filter size={18} />
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-swan-sage-green" size={18} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-swan-botanical-charcoal mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-swan-serene-mint text-swan-forest-canopy'
                          : 'hover:bg-swan-warm-ivory text-swan-botanical-charcoal/70'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-swan-botanical-charcoal/70">
                  {filteredProducts.length} products
                </span>
                <div className="flex bg-white rounded-lg border border-black/10 p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-swan-serene-mint' : 'hover:bg-swan-warm-ivory'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-swan-serene-mint' : 'hover:bg-swan-warm-ivory'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-swan-sage-green/20 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </motion.div>

            {/* Products Grid/List */}
            <motion.div 
              layout
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 group ${
                    viewMode === 'list' ? 'flex gap-6 p-6' : ''
                  }`}
                >
                  <Link 
                    to={`/product/${product.id}`}
                    className={`block relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Product badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-swan-blush-pink text-white px-2 py-1 rounded-full text-xs">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-swan-leaf-green text-white px-2 py-1 rounded-full text-xs">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Wishlist button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Heart
                        size={16}
                        className={wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-swan-botanical-charcoal/60'}
                      />
                    </button>
                  </Link>

                  <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                    <div className="flex items-start justify-between mb-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-swan-forest-canopy group-hover:text-swan-leaf-green transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    
                    <p className="text-swan-botanical-charcoal/60 mb-3 text-sm">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-swan-forest-canopy">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-swan-botanical-charcoal/40 line-through text-sm">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <button className="flex items-center gap-2 bg-swan-leaf-green text-white px-4 py-2 rounded-lg hover:bg-swan-forest-canopy transition-colors">
                        <ShoppingBag size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}