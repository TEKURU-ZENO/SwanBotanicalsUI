import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChevronRight, Play } from 'lucide-react';
import productImage1 from '/p1.jpg';
import productImage2 from '/p2.jpg';
import productImage3 from '/p3.jpg';

const rituals = [
  {
    id: 1,
    title: 'Complete Hair Wellness Ritual',
    description: 'Transform your hair care routine with our signature 3-step botanical ritual for healthy, lustrous locks.',
    duration: '15 minutes',
    difficulty: 'Beginner',
    followers: '2.1k',
    image: productImage1,
    steps: ['Botanical Shampoo', 'Nourishing Conditioner', 'Hair Oil Finish'],
    color: 'swan-serene-mint'
  },
  {
    id: 2,
    title: 'Deep Conditioning Treatment',
    description: 'Weekly intensive treatment using wheat protein conditioner for damaged or chemically treated hair.',
    duration: '30 minutes',
    difficulty: 'Intermediate',
    followers: '1.8k',
    image: productImage2,
    steps: ['Pre-shampoo Oil', 'Gentle Cleanse', 'Deep Condition', 'Cool Rinse'],
    color: 'swan-leaf-green'
  },
  {
    id: 3,
    title: 'Scalp Rejuvenation Ritual',
    description: 'Nourish your scalp with our botanical hair oil blend featuring 18+ herbs and essential nutrients.',
    duration: '20 minutes',
    difficulty: 'Advanced',
    followers: '1.5k',
    image: productImage3,
    steps: ['Scalp Massage', 'Oil Application', 'Steam Treatment', 'Gentle Cleanse'],
    color: 'swan-golden-sand'
  }
];

export default function FeaturedRitualsSection() {
  const [selectedRitual, setSelectedRitual] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-swan-serene-mint/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-swan-forest-canopy mb-6">
            Featured Hair Rituals
          </h2>
          <p className="text-swan-botanical-charcoal/70 max-w-3xl mx-auto text-lg">
            Elevate your hair care with our expertly crafted rituals. Each routine is designed 
            to harness the power of botanical ingredients for healthier, more beautiful hair.
          </p>
        </motion.div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rituals.map((ritual, index) => (
            <motion.div
              key={ritual.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group cursor-pointer`}
              onClick={() => setSelectedRitual(selectedRitual === ritual.id ? null : ritual.id)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-${ritual.color}/80 backdrop-blur-sm text-swan-forest-canopy px-3 py-1 rounded-full text-sm`}>
                    {ritual.duration}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play size={24} className="text-swan-forest-canopy ml-1" />
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{ritual.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{ritual.followers}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl text-swan-forest-canopy mb-2 group-hover:text-swan-leaf-green transition-colors">
                      {ritual.title}
                    </h3>
                    <span className={`text-xs bg-${ritual.color}/20 text-swan-forest-canopy px-2 py-1 rounded-full`}>
                      {ritual.difficulty}
                    </span>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`text-swan-sage-green transition-transform ${
                      selectedRitual === ritual.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} 
                  />
                </div>

                <p className="text-swan-botanical-charcoal/60 mb-4">
                  {ritual.description}
                </p>

                {/* Steps Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {ritual.steps.slice(0, 3).map((step, stepIndex) => (
                    <span
                      key={stepIndex}
                      className="text-xs bg-swan-warm-ivory text-swan-botanical-charcoal/70 px-2 py-1 rounded"
                    >
                      {step}
                    </span>
                  ))}
                  {ritual.steps.length > 3 && (
                    <span className="text-xs text-swan-sage-green">
                      +{ritual.steps.length - 3} more
                    </span>
                  )}
                </div>

                {/* Expanded Steps */}
                {selectedRitual === ritual.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-swan-sage-green/20 pt-4 mt-4"
                  >
                    <h4 className="text-swan-forest-canopy mb-3">Complete Steps:</h4>
                    <div className="space-y-2">
                      {ritual.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <div className={`w-6 h-6 bg-${ritual.color} text-swan-forest-canopy rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-swan-botanical-charcoal/70">{step}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-swan-leaf-green text-white py-3 rounded-lg hover:bg-swan-forest-canopy transition-colors"
                >
                  Start This Ritual
                </motion.button>
              </div>
            </motion.div>
          ))}
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
            Explore All Rituals
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}