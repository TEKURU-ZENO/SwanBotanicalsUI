import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplet, Sparkles } from 'lucide-react';
import heroProductImage from '/p4.jpg';

const floatingElements = [
  { icon: Leaf, delay: 0, x: -20, y: -30, duration: 6 },
  { icon: Droplet, delay: 1, x: 30, y: -40, duration: 8 },
  { icon: Sparkles, delay: 2, x: -40, y: 20, duration: 7 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-swan-serene-mint via-swan-warm-ivory to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--swan-leaf-green) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-swan-sage-green/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, element.y, 0],
            x: [0, element.x, 0],
          }}
          transition={{
            opacity: { delay: element.delay, duration: 1 },
            scale: { delay: element.delay, duration: 1 },
            y: { 
              delay: element.delay + 1, 
              duration: element.duration, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
            x: { 
              delay: element.delay + 1.5, 
              duration: element.duration + 1, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          style={{
            left: index === 2 ? '90%' : `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <element.icon size={48} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-swan-leaf-green/10 text-swan-forest-canopy px-4 py-2 rounded-full mb-8"
            >
              <Sparkles size={16} />
              <span className="text-sm">Botanical Hair & Skincare</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl text-swan-forest-canopy mb-6 leading-tight"
            >
              Nature's Pure
              <br />
              <span className="bg-gradient-to-r from-swan-leaf-green to-swan-sage-green bg-clip-text text-transparent">
                Botanical
              </span>
              <br />
              Beauty
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-swan-botanical-charcoal/70 mb-8 max-w-2xl leading-relaxed"
            >
              Discover the transformative power of botanical ingredients with our ALOHA collection. 
              From nourishing shampoos to rejuvenating hair oils, each product is crafted with 
              nature's finest elements.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              {[
                { icon: Leaf, text: '18+ Botanical Herbs' },
                { icon: Droplet, text: 'No Harmful Chemicals' },
                { icon: Sparkles, text: 'Clinically Tested' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-swan-serene-mint rounded-full flex items-center justify-center">
                    <feature.icon size={20} className="text-swan-forest-canopy" />
                  </div>
                  <span className="text-swan-botanical-charcoal/70">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-swan-leaf-green text-white px-8 py-4 rounded-full hover:bg-swan-forest-canopy transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Shop Collection
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-swan-sage-green text-swan-forest-canopy px-8 py-4 rounded-full hover:bg-swan-sage-green hover:text-white transition-all duration-300 text-lg"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Decorative Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-swan-serene-mint/30 to-swan-leaf-green/20 rounded-full transform scale-110 blur-3xl" />
            
            {/* Product Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 transform-gpu"
              style={{ perspective: "1000px" }}
            >
              <img
                src={heroProductImage}
                alt="ALOHA Botanical Hair Care Collection"
                className="w-full h-144 object-contain drop-shadow-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-swan-blush-pink text-white px-4 py-2 rounded-full text-sm shadow-lg"
              >
                ✨ New Collection
              </motion.div>

              {/* Floating Price Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-4 right-4 bg-swan-golden-sand text-swan-forest-canopy px-4 py-2 rounded-full shadow-lg"
              >
                Starting at $38
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="absolute top-1/4 -left-8 w-16 h-16 bg-swan-warm-ivory/50 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="absolute bottom-1/4 -right-8 w-12 h-12 bg-swan-serene-mint/40 rounded-full blur-sm"
            />
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}