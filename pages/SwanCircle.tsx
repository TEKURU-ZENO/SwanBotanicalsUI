import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Gift, Users, Star, Award, Sparkles, Heart, ShoppingBag, Calendar, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/checker/ImageWithFallback';

const membershipTiers = [
  {
    name: 'Seedling',
    icon: Sparkles,
    color: 'swan-serene-mint',
    minSpend: 0,
    benefits: ['5% cashback on all orders', 'Birthday month special offer', 'Early access to sales', 'Free standard shipping on orders $75+'],
    pointsMultiplier: '1x'
  },
  {
    name: 'Bloom',
    icon: Star,
    color: 'swan-leaf-green',
    minSpend: 500,
    benefits: ['10% cashback on all orders', 'Complimentary gift wrapping', 'Priority customer support', 'Exclusive member events', 'Free express shipping'],
    pointsMultiplier: '1.5x'
  },
  {
    name: 'Garden Elite',
    icon: Crown,
    color: 'swan-golden-sand',
    minSpend: 1500,
    benefits: ['15% cashback on all orders', 'Personal skincare consultation', 'Limited edition products access', 'VIP customer service', 'Free next-day shipping', 'Annual exclusive gift'],
    pointsMultiplier: '2x'
  }
];

const rewards = [
  {
    id: 1,
    name: '$10 Off Any Order',
    points: 200,
    category: 'discount',
    description: 'Apply to any purchase in our collection',
    image: 'discount voucher'
  },
  {
    id: 2,
    name: 'Botanical Cleansing Ritual - Travel Size',
    points: 500,
    category: 'product',
    description: 'Perfect for your skincare routine on-the-go',
    image: 'travel size cleanser'
  },
  {
    id: 3,
    name: 'Free Shipping for 3 Months',
    points: 350,
    category: 'shipping',
    description: 'Complimentary shipping on all orders',
    image: 'shipping benefit'
  },
  {
    id: 4,
    name: 'Exclusive Swan Circle Tote Bag',
    points: 750,
    category: 'exclusive',
    description: 'Limited edition sustainable tote bag',
    image: 'exclusive tote bag'
  },
  {
    id: 5,
    name: 'Virtual Skincare Consultation',
    points: 1000,
    category: 'service',
    description: '30-minute one-on-one session with our expert',
    image: 'virtual consultation'
  },
  {
    id: 6,
    name: '$50 Off Orders $200+',
    points: 1200,
    category: 'discount',
    description: 'Significant savings on larger orders',
    image: 'large discount voucher'
  }
];

const communityStats = [
  { label: 'Active Members', value: '12,847', icon: Users },
  { label: 'Rewards Redeemed', value: '3,456', icon: Gift },
  { label: 'Sustainability Points', value: '89,234', icon: Heart },
  { label: 'Community Reviews', value: '5,678', icon: Star }
];

const challenges = [
  {
    id: 1,
    title: 'Sustainable Beauty Month',
    description: 'Complete your routine with eco-friendly products',
    progress: 65,
    reward: '500 bonus points',
    endDate: '2024-02-29',
    icon: Heart
  },
  {
    id: 2,
    title: 'Glow Up Challenge',
    description: 'Share your skincare transformation journey',
    progress: 30,
    reward: 'Free consultation',
    endDate: '2024-02-15',
    icon: Sparkles
  },
  {
    id: 3,
    title: 'Refer a Friend',
    description: 'Introduce Swan Botanicals to your circle',
    progress: 80,
    reward: '$25 credit each',
    endDate: '2024-03-31',
    icon: Users
  }
];

export default function SwanCircle() {
  const [selectedRewardCategory, setSelectedRewardCategory] = useState('all');
  const [currentPoints] = useState(1850);
  const [currentTier] = useState('Bloom');

  const filteredRewards = rewards.filter(reward => 
    selectedRewardCategory === 'all' || reward.category === selectedRewardCategory
  );

  const rewardCategories = ['all', 'discount', 'product', 'shipping', 'exclusive', 'service'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory via-white to-swan-serene-mint/20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-swan-leaf-green to-swan-forest-canopy text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Crown size={40} className="text-swan-golden-sand" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Welcome to Swan Circle
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our exclusive membership program rewards your commitment to botanical beauty 
              with points, perks, and a community that celebrates natural wellness.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Member Dashboard */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl text-swan-forest-canopy mb-2">
                  Your Membership Status
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <Star className="text-swan-leaf-green" size={24} />
                  <span className="text-xl text-swan-leaf-green">{currentTier} Member</span>
                </div>
                <p className="text-swan-botanical-charcoal/60">
                  You're doing amazing! Keep earning points to unlock more exclusive benefits.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-swan-serene-mint/30 rounded-full p-8 inline-block mb-4">
                  <div className="text-3xl text-swan-forest-canopy">
                    {currentPoints.toLocaleString()}
                  </div>
                  <div className="text-swan-botanical-charcoal/60 text-sm">Available Points</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-swan-botanical-charcoal/70">Next Tier Progress</span>
                  <span className="text-swan-forest-canopy">1,230 / 1,500</span>
                </div>
                <div className="w-full bg-swan-serene-mint/30 rounded-full h-3">
                  <div className="bg-swan-leaf-green h-3 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-swan-botanical-charcoal/60 text-sm">
                  270 points until Garden Elite status
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Membership Tiers */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-swan-forest-canopy text-center mb-12">
            Membership Tiers & Benefits
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                  tier.name === currentTier 
                    ? `border-${tier.color} ring-4 ring-${tier.color}/20` 
                    : 'border-black/5 hover:border-black/10'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${tier.color}/20 rounded-full mb-4`}>
                    <tier.icon size={32} className={`text-${tier.color}`} />
                  </div>
                  <h3 className="text-xl text-swan-forest-canopy mb-2">{tier.name}</h3>
                  <p className="text-swan-botanical-charcoal/60">
                    ${tier.minSpend}+ annual spend
                  </p>
                  <div className="mt-2">
                    <span className={`bg-${tier.color}/20 text-${tier.color} px-3 py-1 rounded-full text-sm`}>
                      {tier.pointsMultiplier} Points
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-${tier.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-swan-botanical-charcoal/70 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {tier.name === currentTier && (
                  <div className="mt-6 p-3 bg-swan-serene-mint/30 rounded-lg text-center">
                    <span className="text-swan-forest-canopy text-sm">Current Tier</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Rewards Catalog */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-swan-forest-canopy text-center mb-8">
            Rewards Catalog
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {rewardCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedRewardCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedRewardCategory === category
                    ? 'bg-swan-leaf-green text-white'
                    : 'bg-white text-swan-botanical-charcoal/70 hover:bg-swan-serene-mint border border-black/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src=""
                    alt={reward.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-swan-serene-mint to-swan-leaf-green/20 flex items-center justify-center">
                        <span className="text-swan-forest-canopy/60 text-sm text-center px-4">
                          {reward.image}
                        </span>
                      </div>
                    }
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-swan-forest-canopy">{reward.name}</h3>
                    <span className="bg-swan-golden-sand/20 text-swan-forest-canopy px-2 py-1 rounded-full text-sm">
                      {reward.points} pts
                    </span>
                  </div>
                  
                  <p className="text-swan-botanical-charcoal/60 text-sm mb-4">
                    {reward.description}
                  </p>

                  <button 
                    className={`w-full py-3 rounded-lg transition-colors ${
                      currentPoints >= reward.points
                        ? 'bg-swan-leaf-green text-white hover:bg-swan-forest-canopy'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={currentPoints < reward.points}
                  >
                    {currentPoints >= reward.points ? 'Redeem Now' : 'Insufficient Points'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-swan-forest-canopy text-center mb-12">
            Our Growing Community
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-black/5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-swan-serene-mint/30 rounded-full mb-4">
                  <stat.icon size={24} className="text-swan-leaf-green" />
                </div>
                <div className="text-2xl text-swan-forest-canopy mb-1">{stat.value}</div>
                <div className="text-swan-botanical-charcoal/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Challenges */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-swan-forest-canopy text-center mb-12">
            Current Challenges
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-black/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-swan-serene-mint/30 rounded-full flex items-center justify-center">
                    <challenge.icon size={20} className="text-swan-leaf-green" />
                  </div>
                  <div>
                    <h3 className="text-swan-forest-canopy">{challenge.title}</h3>
                    <p className="text-swan-botanical-charcoal/60 text-sm">{challenge.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-swan-botanical-charcoal/70">Progress</span>
                    <span className="text-swan-forest-canopy">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-swan-serene-mint/30 rounded-full h-2">
                    <div 
                      className="bg-swan-leaf-green h-2 rounded-full transition-all duration-300"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-swan-leaf-green text-sm">{challenge.reward}</span>
                  <span className="text-swan-botanical-charcoal/60 text-sm">
                    Ends {new Date(challenge.endDate).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-swan-serene-mint to-swan-warm-ivory rounded-2xl p-12">
            <Crown size={48} className="text-swan-forest-canopy mx-auto mb-6" />
            <h2 className="text-3xl text-swan-forest-canopy mb-4">
              Ready to Join Swan Circle?
            </h2>
            <p className="text-swan-botanical-charcoal/70 mb-6 max-w-2xl mx-auto">
              Start earning points with your first purchase and unlock exclusive benefits, 
              early access to new products, and join our community of botanical beauty enthusiasts.
            </p>
            <button className="bg-swan-leaf-green text-white px-8 py-3 rounded-lg hover:bg-swan-forest-canopy transition-colors">
              Create Account & Join
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}