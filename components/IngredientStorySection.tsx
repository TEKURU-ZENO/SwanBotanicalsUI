import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './checker/ImageWithFallback';

const ingredients = [
  {
    name: "Rose Hip Oil",
    origin: "Chilean Andes",
    benefit: "Deep Hydration & Regeneration",
    description: "Sourced from wild rose bushes at high altitude, our organic rose hip oil is rich in vitamins A and C, promoting cellular renewal and natural radiance.",
    image: "https://images.unsplash.com/photo-1591135108731-615592cf231b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwaGlwJTIwb2lsJTIwYm90YW5pY2FsJTIwaW5ncmVkaWVudCUyMHNraW5jYXJlJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTQ1ODgxNzF8MA&ixlib=rb-4.1.0&q=80&w=800"
  },
  {
    name: "Botanical Hyaluronic Acid",
    origin: "Fermented Cassava Root",
    benefit: "Plumping & Moisture Retention",
    description: "Our plant-based hyaluronic acid is derived through gentle fermentation, providing superior hydration while being completely sustainable and vegan.",
    image: "https://images.unsplash.com/photo-1463428377365-203e7061c8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWFsdXJvbmljJTIwYWNpZCUyMHNlcnVtJTIwYm90YW5pY2FsJTIwc2tpbmNhcmUlMjBwbGFudHN8ZW58MXx8fHwxNzU0NTg4MTc0fDA&ixlib=rb-4.1.0&q=80&w=800"
  },
  {
    name: "White Tea Extract",
    origin: "Fujian Province, China",
    benefit: "Antioxidant Protection",
    description: "Hand-harvested young tea buds provide powerful antioxidants that protect against environmental stressors while promoting skin clarity and evenness.",
    image: "https://images.unsplash.com/photo-1726994804363-5c7ce2255254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRlYSUyMGxlYXZlcyUyMG5hdHVyYWwlMjBib3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NTQ1ODgxNzd8MA&ixlib=rb-4.1.0&q=80&w=800"
  },
  {
    name: "Bakuchiol",
    origin: "Ayurvedic Babchi Seeds",
    benefit: "Natural Retinol Alternative",
    description: "This gentle plant-based compound stimulates collagen production and improves skin texture without the sensitivity associated with traditional retinoids.",
    image: "https://images.unsplash.com/photo-1495783519721-5b4bf1fe46c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWt1Y2hpb2wlMjBiYWJjaGklMjBzZWVkcyUyMG5hdHVyYWwlMjBib3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NTQ1ODgxODB8MA&ixlib=rb-4.1.0&q=80&w=800"
  }
];

export default function IngredientStorySection() {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--swan-warm-ivory)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl" style={{ color: 'var(--swan-forest-canopy)' }}>
              Nature's Finest
            </h2>
            <div className="mt-4">
              <span 
                className="text-2xl md:text-3xl relative inline-block"
                style={{ color: 'var(--swan-sage-green)' }}
              >
                Botanical Ingredients
                <div 
                  className="absolute bottom-0 left-0 w-full h-0.5 mt-2"
                  style={{ backgroundColor: 'var(--swan-golden-sand)' }}
                ></div>
              </span>
            </div>
          </div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--swan-botanical-charcoal)' }}>
            Each ingredient tells a story of origin, purity, and purpose. We source globally and ethically, bringing you the most potent botanicals nature has to offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div 
                className="rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
                style={{ backgroundColor: 'var(--swan-sage-green)' }}
              >
                {/* Background pattern on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: 'var(--swan-warm-ivory)' }}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <ImageWithFallback 
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-xl">{ingredient.name}</h3>
                      <span 
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ 
                          backgroundColor: 'var(--swan-blush-pink)',
                          color: 'var(--swan-forest-canopy)'
                        }}
                      >
                        {ingredient.origin}
                      </span>
                    </div>
                    <p 
                      className="text-sm mb-4"
                      style={{ color: 'var(--swan-golden-sand)' }}
                    >
                      {ingredient.benefit}
                    </p>
                  </div>

                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="h-px w-full mb-4"
                      style={{ backgroundColor: 'var(--swan-warm-ivory)' }}
                    ></div>
                    <p className="text-white/90 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}