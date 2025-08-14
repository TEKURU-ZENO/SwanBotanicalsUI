import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import swanLogo from '/logo.jpg';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Ritual', href: '/ritual' },
  { name: 'Journal', href: '/journal' },
  { name: 'Swan Circle', href: '/swan-circle' },
  { name: 'Contact', href: '/contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-black/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={swanLogo}
              alt="Swan Botanicals"
              className="h-12 lg:h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-3 py-2 text-sm tracking-wide transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-swan-forest-canopy'
                    : 'text-swan-botanical-charcoal/70 hover:text-swan-leaf-green'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-swan-leaf-green"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-swan-botanical-charcoal/70 hover:text-swan-leaf-green transition-colors">
              <Search size={20} />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="flex items-center space-x-1 p-2 text-swan-botanical-charcoal/70 hover:text-swan-leaf-green transition-colors"
              >
                <User size={20} />
                <ChevronDown size={16} className={`transition-transform ${showAccountMenu ? 'rotate-180' : ''}`} />
              </button>

              {showAccountMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-black/5 py-2 z-50"
                >
                  <Link to="/swan-circle" className="block px-4 py-2 text-sm text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint/30 hover:text-swan-forest-canopy">
                    My Swan Circle
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint/30 hover:text-swan-forest-canopy">
                    Order History
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint/30 hover:text-swan-forest-canopy">
                    Account Settings
                  </Link>
                  <div className="border-t border-black/5 my-2"></div>
                  <button className="w-full text-left px-4 py-2 text-sm text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint/30 hover:text-swan-forest-canopy">
                    Sign Out
                  </button>
                </motion.div>
              )}
            </div>

            <button className="p-2 text-swan-botanical-charcoal/70 hover:text-swan-leaf-green transition-colors relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-swan-blush-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button className="p-2 text-swan-botanical-charcoal/70 hover:text-swan-leaf-green transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-swan-leaf-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-swan-botanical-charcoal/70 hover:text-swan-leaf-green transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-black/5"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base transition-colors ${
                    isActive(link.href)
                      ? 'text-swan-forest-canopy bg-swan-serene-mint/30'
                      : 'text-swan-botanical-charcoal/70 hover:text-swan-leaf-green hover:bg-swan-serene-mint/20'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-black/5 my-2"></div>
              
              <div className="flex items-center justify-around py-4">
                <button className="flex flex-col items-center space-y-1 text-swan-botanical-charcoal/70">
                  <Search size={20} />
                  <span className="text-xs">Search</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-swan-botanical-charcoal/70">
                  <User size={20} />
                  <span className="text-xs">Account</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-swan-botanical-charcoal/70 relative">
                  <Heart size={20} />
                  <span className="text-xs">Wishlist</span>
                  <span className="absolute -top-1 -right-1 bg-swan-blush-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-swan-botanical-charcoal/70 relative">
                  <ShoppingBag size={20} />
                  <span className="text-xs">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-swan-leaf-green text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}