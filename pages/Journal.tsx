import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/checker/ImageWithFallback';

const categories = ['All', 'Ingredients', 'Routines', 'Wellness', 'Sustainability', 'Expert Tips'];

const articles = [
  {
    id: 1,
    title: 'The Science Behind Botanical Actives: How Nature Heals Your Skin',
    category: 'Ingredients',
    excerpt: 'Dive deep into the molecular structure of botanical ingredients and discover how plants have evolved the perfect compounds for skin health.',
    author: 'Dr. Elena Swan',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'botanical ingredients microscope',
    featured: true,
    tags: ['Science', 'Botanicals', 'Research']
  },
  {
    id: 2,
    title: 'Morning vs Evening: Optimizing Your Skincare Timeline',
    category: 'Routines',
    excerpt: 'Understanding your skin\'s circadian rhythm can revolutionize your skincare results. Learn when to apply what for maximum efficacy.',
    author: 'Sarah Chen, Aesthetician',
    date: '2024-01-12',
    readTime: '6 min read',
    image: 'morning evening skincare',
    featured: false,
    tags: ['Routine', 'Tips', 'Timing']
  },
  {
    id: 3,
    title: 'Sustainable Beauty: Our Zero-Waste Manufacturing Process',
    category: 'Sustainability',
    excerpt: 'Take a behind-the-scenes look at how we\'ve revolutionized skincare manufacturing to achieve complete carbon neutrality.',
    author: 'Marcus Green, Sustainability Director',
    date: '2024-01-10',
    readTime: '12 min read',
    image: 'sustainable manufacturing',
    featured: false,
    tags: ['Sustainability', 'Manufacturing', 'Environment']
  },
  {
    id: 4,
    title: 'Adaptogens in Skincare: Ancient Wisdom Meets Modern Science',
    category: 'Ingredients',
    excerpt: 'Explore how adaptogenic herbs like ashwagandha and ginseng are transforming topical skincare applications.',
    author: 'Dr. Priya Patel',
    date: '2024-01-08',
    readTime: '10 min read',
    image: 'adaptogenic herbs skincare',
    featured: true,
    tags: ['Adaptogens', 'Ancient Wisdom', 'Science']
  },
  {
    id: 5,
    title: 'The Art of Layering: Maximizing Your Serum Benefits',
    category: 'Expert Tips',
    excerpt: 'Master the technique of layering multiple serums without causing irritation or reducing their effectiveness.',
    author: 'Lisa Rodriguez, Licensed Aesthetician',
    date: '2024-01-05',
    readTime: '7 min read',
    image: 'serum layering technique',
    featured: false,
    tags: ['Serums', 'Technique', 'Application']
  },
  {
    id: 6,
    title: 'Mindful Skincare: Transforming Your Routine into Meditation',
    category: 'Wellness',
    excerpt: 'Discover how to turn your daily skincare routine into a powerful mindfulness practice that nourishes both skin and soul.',
    author: 'Dr. Elena Swan',
    date: '2024-01-03',
    readTime: '5 min read',
    image: 'mindful skincare meditation',
    featured: false,
    tags: ['Mindfulness', 'Wellness', 'Self-care']
  }
];

const newsletters = [
  { title: 'Weekly Botanical Insights', description: 'Latest research and ingredient spotlights' },
  { title: 'Seasonal Skincare Guide', description: 'Quarterly routine adjustments and tips' },
  { title: 'Expert Interviews', description: 'Monthly conversations with skincare professionals' }
];

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory via-white to-swan-serene-mint/10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-black/10 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-swan-forest-canopy mb-4">
            The Botanical Journal
          </h1>
          <p className="text-swan-botanical-charcoal/70 max-w-3xl text-lg">
            Insights, research, and wisdom from the world of botanical skincare. 
            Explore the science, sustainability, and soul behind natural beauty.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-swan-sage-green" size={20} />
              <input
                type="text"
                placeholder="Search articles, ingredients, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-swan-sage-green/20 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-swan-leaf-green text-white shadow-lg'
                    : 'bg-white/80 text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint border border-black/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-2xl text-swan-forest-canopy mb-8 flex items-center gap-2">
              Featured Articles
              <div className="w-12 h-px bg-swan-leaf-green"></div>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src=""
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-swan-serene-mint to-swan-leaf-green/20 flex items-center justify-center">
                          <span className="text-swan-forest-canopy/60 text-sm text-center px-4">
                            {article.image}
                          </span>
                        </div>
                      }
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-swan-blush-pink text-white px-3 py-1 rounded-full text-sm">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-swan-botanical-charcoal/60">
                      <span className="bg-swan-serene-mint text-swan-forest-canopy px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl text-swan-forest-canopy mb-3 group-hover:text-swan-leaf-green transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-swan-botanical-charcoal/70 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-swan-sage-green/20 text-swan-forest-canopy px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-swan-botanical-charcoal/60">
                        <User size={16} />
                        {article.author}
                      </div>
                      <button className="flex items-center gap-2 text-swan-leaf-green hover:text-swan-forest-canopy transition-colors">
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Regular Articles */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-swan-forest-canopy mb-8 flex items-center gap-2">
            Latest Articles
            <div className="w-12 h-px bg-swan-leaf-green"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src=""
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-swan-serene-mint to-swan-leaf-green/20 flex items-center justify-center">
                        <span className="text-swan-forest-canopy/60 text-sm text-center px-4">
                          {article.image}
                        </span>
                      </div>
                    }
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-swan-botanical-charcoal/60">
                    <span className="bg-swan-serene-mint text-swan-forest-canopy px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg text-swan-forest-canopy mb-2 group-hover:text-swan-leaf-green transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-swan-botanical-charcoal/70 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-swan-botanical-charcoal/60">{article.author}</span>
                    <span className="text-swan-botanical-charcoal/40">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-swan-serene-mint to-swan-warm-ivory rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl text-swan-forest-canopy mb-4">
              Stay Informed with Our Newsletter
            </h2>
            <p className="text-swan-botanical-charcoal/70 max-w-2xl mx-auto">
              Get the latest botanical insights, expert tips, and exclusive content 
              delivered directly to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {newsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <h3 className="text-swan-forest-canopy mb-2">{newsletter.title}</h3>
                <p className="text-swan-botanical-charcoal/60 text-sm">{newsletter.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20"
              />
              <button className="bg-swan-leaf-green text-white px-6 py-3 rounded-lg hover:bg-swan-forest-canopy transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}