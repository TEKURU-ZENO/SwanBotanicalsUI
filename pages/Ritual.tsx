import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Play, ChevronRight, Sun, Moon, Droplets, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/checker/ImageWithFallback';

const ritualCategories = ['All Rituals', 'Morning', 'Evening', 'Weekly', 'Seasonal'];

const rituals = [
  {
    id: 1,
    title: 'Morning Radiance Ritual',
    category: 'Morning',
    duration: '8 minutes',
    difficulty: 'Beginner',
    rating: 4.9,
    users: 1234,
    description: 'Start your day with a luminous glow using our signature morning routine.',
    image: 'morning skincare routine',
    steps: [
      { product: 'Botanical Cleansing Ritual', action: 'Gentle cleanse with warm water' },
      { product: 'Vitamin C Brightening Serum', action: 'Apply 2-3 drops, pat gently' },
      { product: 'Hydrating Day Cream', action: 'Massage upward in circular motions' },
      { product: 'Mineral Sunscreen SPF 30', action: 'Apply evenly, don\'t forget neck' }
    ],
    benefits: ['Brightens skin tone', 'Protects from environmental damage', 'Provides all-day hydration'],
    icon: Sun
  },
  {
    id: 2,
    title: 'Evening Restoration Ritual',
    category: 'Evening',
    duration: '12 minutes',
    difficulty: 'Intermediate',
    rating: 4.8,
    users: 987,
    description: 'Wind down with our nourishing evening routine for overnight repair.',
    image: 'evening skincare routine',
    steps: [
      { product: 'Gentle Makeup Remover', action: 'Remove makeup and sunscreen thoroughly' },
      { product: 'Botanical Cleansing Ritual', action: 'Double cleanse for deep purification' },
      { product: 'Radiance Renewal Serum', action: 'Apply to slightly damp skin' },
      { product: 'Nourishing Night Cream', action: 'Generous layer, massage in gently' }
    ],
    benefits: ['Repairs daily damage', 'Deeply moisturizes', 'Promotes cell renewal'],
    icon: Moon
  },
  {
    id: 3,
    title: 'Hydration Reset Ritual',
    category: 'Weekly',
    duration: '20 minutes',
    difficulty: 'Beginner',
    rating: 4.7,
    users: 756,
    description: 'Weekly intensive hydration treatment for plump, dewy skin.',
    image: 'hydrating face mask',
    steps: [
      { product: 'Exfoliating Enzyme Mask', action: 'Apply thin layer, leave 10 minutes' },
      { product: 'Hydrating Essence', action: 'Pat into clean skin generously' },
      { product: 'Sheet Mask', action: 'Relax for 15-20 minutes' },
      { product: 'Face Oil Blend', action: 'Seal with 3-4 drops, press in' }
    ],
    benefits: ['Intense hydration', 'Plumps fine lines', 'Restores skin barrier'],
    icon: Droplets
  },
  {
    id: 4,
    title: 'Glow Enhancement Ritual',
    category: 'Weekly',
    duration: '15 minutes',
    difficulty: 'Advanced',
    rating: 4.9,
    users: 543,
    description: 'Advanced ritual for luminous, glass-skin finish.',
    image: 'glowing skin treatment',
    steps: [
      { product: 'Vitamin C Exfoliating Serum', action: 'Apply with gentle upward strokes' },
      { product: 'Brightening Essence', action: 'Pat in layers until absorbed' },
      { product: 'Illuminating Mask', action: 'Leave on for 15 minutes' },
      { product: 'Glow Oil', action: 'Finish with lightweight application' }
    ],
    benefits: ['Enhances natural radiance', 'Evens skin tone', 'Creates lit-from-within glow'],
    icon: Sparkles
  }
];

const skinTypes = [
  { type: 'Normal', description: 'Balanced, neither too oily nor too dry' },
  { type: 'Dry', description: 'Needs extra moisture and gentle care' },
  { type: 'Oily', description: 'Excess oil production, prone to shine' },
  { type: 'Combination', description: 'Oily T-zone with dry cheeks' },
  { type: 'Sensitive', description: 'Easily irritated, needs gentle products' }
];

export default function Ritual() {
  const [selectedCategory, setSelectedCategory] = useState('All Rituals');
  const [selectedRitual, setSelectedRitual] = useState<number | null>(null);

  const filteredRituals = rituals.filter(ritual => 
    selectedCategory === 'All Rituals' || ritual.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory via-white to-swan-serene-mint/20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-black/10 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-swan-forest-canopy mb-4">
            Botanical Beauty Rituals
          </h1>
          <p className="text-swan-botanical-charcoal/70 max-w-3xl text-lg">
            Transform your skincare routine into a mindful ritual. Discover step-by-step guides 
            crafted by our botanical experts for every skin type and concern.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Skin Type Selector */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-swan-forest-canopy mb-8 text-center">
            Find Your Perfect Ritual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {skinTypes.map((skin, index) => (
              <motion.div
                key={skin.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border border-black/5 hover:border-swan-leaf-green/30"
              >
                <h3 className="text-swan-forest-canopy mb-2 group-hover:text-swan-leaf-green transition-colors">
                  {skin.type}
                </h3>
                <p className="text-swan-botanical-charcoal/60 text-sm">
                  {skin.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {ritualCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-swan-leaf-green text-white shadow-lg'
                  : 'bg-white text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint border border-black/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRituals.map((ritual, index) => (
            <motion.div
              key={ritual.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src=""
                  alt={ritual.title}
                  className="w-full h-full object-cover"
                  fallback={
                    <div className="w-full h-full bg-gradient-to-br from-swan-serene-mint to-swan-leaf-green/20 flex items-center justify-center">
                      <div className="text-center">
                        <ritual.icon size={48} className="text-swan-forest-canopy/40 mx-auto mb-4" />
                        <span className="text-swan-forest-canopy/60 text-sm">
                          {ritual.image}
                        </span>
                      </div>
                    </div>
                  }
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-swan-leaf-green text-white px-3 py-1 rounded-full text-sm">
                    {ritual.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-swan-forest-canopy mb-2">
                      {ritual.title}
                    </h3>
                    <p className="text-swan-botanical-charcoal/60 mb-3">
                      {ritual.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm text-swan-botanical-charcoal/70">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {ritual.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {ritual.users.toLocaleString()} users
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    {ritual.rating}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-swan-forest-canopy mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {ritual.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-swan-serene-mint/50 text-swan-forest-canopy px-2 py-1 rounded-full text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRitual(selectedRitual === ritual.id ? null : ritual.id)}
                  className="w-full bg-swan-leaf-green text-white py-3 rounded-lg hover:bg-swan-forest-canopy transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={16} />
                  View Ritual Steps
                  <ChevronRight size={16} className={`transition-transform ${selectedRitual === ritual.id ? 'rotate-90' : ''}`} />
                </button>

                {/* Expanded Steps */}
                {selectedRitual === ritual.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-swan-sage-green/20"
                  >
                    <h4 className="text-swan-forest-canopy mb-4">Step-by-Step Guide:</h4>
                    <div className="space-y-4">
                      {ritual.steps.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex gap-4">
                          <div className="w-8 h-8 bg-swan-leaf-green text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                            {stepIdx + 1}
                          </div>
                          <div>
                            <h5 className="text-swan-forest-canopy mb-1">{step.product}</h5>
                            <p className="text-swan-botanical-charcoal/60 text-sm">{step.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-swan-serene-mint to-swan-warm-ivory rounded-2xl p-12">
            <h2 className="text-3xl text-swan-forest-canopy mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-swan-botanical-charcoal/70 mb-6 max-w-2xl mx-auto">
              Book a complimentary consultation with our botanical skincare experts to create 
              a custom ritual tailored to your unique skin needs.
            </p>
            <button className="bg-swan-leaf-green text-white px-8 py-3 rounded-lg hover:bg-swan-forest-canopy transition-colors">
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}