import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import swanLogo from '/logo.jpg';

export default function Footer() {
  return (
    <footer className="pt-20 pb-8" style={{ backgroundColor: 'var(--swan-forest-canopy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <img 
                src={swanLogo}
                alt="Swan Botanicals"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Luxurious skincare crafted from nature's finest botanicals. Transforming daily routines into moments of mindful self-care.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: 'var(--swan-sage-green)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white">Shop</h3>
            <ul className="space-y-2">
              {['New Arrivals', 'Bestsellers', 'Hair Care', 'Skincare', 'Body Care', 'Ritual Sets'].map((item) => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white">Support</h3>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Size Guide', 'Ingredient Guide'].map((item) => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: 'var(--swan-leaf-green)' }} />
                <span className="text-white/80">hello@swanbotanicals.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: 'var(--swan-leaf-green)' }} />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" style={{ color: 'var(--swan-leaf-green)' }} />
                <span className="text-white/80">
                  123 Botanical Avenue<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white text-xl mb-4">Join The Swan Circle</h3>
            <p className="text-white/80 mb-6">
              Be the first to know about new products, exclusive offers, and botanical beauty tips.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full text-white swan-gradient-leaf-sage"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm">
            © 2024 Swan Botanicals. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sustainability'].map((item) => (
              <motion.a 
                key={item}
                whileHover={{ y: -1 }}
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}