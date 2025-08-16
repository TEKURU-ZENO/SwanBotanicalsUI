import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './checker/ImageWithFallback';
import { Quote } from 'lucide-react';

export default function FounderStorySection() {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--swan-warm-ivory)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1619276323764-64acac48b698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwbmF0dXJhbCUyMGxpZ2h0aW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTQ1OTA3ODR8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Elena Swan, Founder"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--swan-blush-pink)' }}
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full"
                style={{ backgroundColor: 'var(--swan-sage-green)' }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl"
                style={{ color: 'var(--swan-forest-canopy)' }}
              >
                Meet Elena
              </motion.h2>
              
              <div className="mt-4 mb-4">
                <span 
                  className="text-2xl md:text-3xl relative inline-block"
                  style={{ color: 'var(--swan-sage-green)' }}
                >
                  Our Founder
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-0.5 mt-2"
                    style={{ backgroundColor: 'var(--swan-golden-sand)' }}
                  ></motion.div>
                </span>
              </div>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-wider mb-6"
                style={{ color: 'var(--swan-sage-green)' }}
              >
                Botanist & Skincare Alchemist
              </motion.p>
            </div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed" style={{ color: 'var(--swan-botanical-charcoal)' }}>
                "After years of studying botanical science and witnessing the incredible healing power of plants, I knew there had to be a better way to create skincare that truly nurtures both skin and soul."
              </p>
              
              <p className="leading-relaxed" style={{ color: 'var(--swan-botanical-charcoal)' }}>
                Elena's journey began in her grandmother's garden in Provence, where she first learned about the medicinal properties of herbs and flowers. Today, she travels the world sourcing the finest botanical ingredients, working directly with farmers and communities to ensure both quality and sustainability.
              </p>
              
              <p className="leading-relaxed" style={{ color: 'var(--swan-botanical-charcoal)' }}>
                Every Swan Botanicals formula reflects her commitment to clean, effective skincare that honors the wisdom of traditional botanical medicine while embracing modern scientific innovation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-px"
                  style={{ backgroundColor: 'var(--swan-golden-sand)' }}
                ></div>
                <p className="italic" style={{ color: 'var(--swan-sage-green)' }}>
                  "Nature knows best. We just listen."
                </p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mt-6"
              >
                <motion.button 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full text-white transition-all duration-300 swan-gradient-leaf-sage shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: 'var(--swan-sage-green)' }}
                >
                  Read Elena's Full Story
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
