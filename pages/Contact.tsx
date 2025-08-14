import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Leaf,
  Heart,
  Award
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@swanbotanicals.com',
    description: 'We typically respond within 24 hours',
    color: 'swan-leaf-green'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Monday - Friday, 9 AM - 6 PM PST',
    color: 'swan-blush-pink'
  },
  {
    icon: MapPin,
    title: 'Visit Our Studio',
    content: '123 Botanical Avenue\nSan Francisco, CA 94102',
    description: 'By appointment only',
    color: 'swan-golden-sand'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    content: 'Chat with our team',
    description: 'Available during business hours',
    color: 'swan-sage-green'
  }
];

const faqs = [
  {
    question: 'How long does shipping take?',
    answer: 'We offer free standard shipping (3-5 business days) on orders over $75. Express shipping (1-2 business days) is available for $15.'
  },
  {
    question: 'Are your products suitable for sensitive skin?',
    answer: 'Yes! Our products are formulated with gentle, natural ingredients and are suitable for all skin types, including sensitive skin. We recommend patch testing for new products.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your purchase, return it for a full refund or exchange.'
  },
  {
    question: 'Are Swan Botanicals products cruelty-free?',
    answer: 'Absolutely! We are proudly cruelty-free and never test on animals. Many of our products are also vegan-friendly.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setIsSubmitting(false);
    
    // In a real app, you would send the data to your backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-swan-warm-ivory to-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-black/10 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-swan-forest-canopy mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-swan-botanical-charcoal/70 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our products, 
            need skincare advice, or want to share your Swan Botanicals journey.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 bg-${info.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon size={24} className={`text-${info.color}`} />
              </div>
              <h3 className="text-swan-forest-canopy mb-2">{info.title}</h3>
              <p className="text-swan-botanical-charcoal whitespace-pre-line mb-2">{info.content}</p>
              <p className="text-sm text-swan-botanical-charcoal/60">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
          >
            <h2 className="text-2xl text-swan-forest-canopy mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-swan-botanical-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:border-swan-leaf-green"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-swan-botanical-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:border-swan-leaf-green"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-swan-botanical-charcoal mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:border-swan-leaf-green bg-white"
                >
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-swan-botanical-charcoal mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:border-swan-leaf-green"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-swan-botanical-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-swan-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-swan-leaf-green/20 focus:border-swan-leaf-green resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-swan-leaf-green text-white py-4 rounded-lg hover:bg-swan-forest-canopy transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* FAQ & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <h2 className="text-2xl text-swan-forest-canopy mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-swan-sage-green/20 pb-4 last:border-b-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full text-left flex items-center justify-between py-2 hover:text-swan-leaf-green transition-colors"
                    >
                      <span className="text-swan-botanical-charcoal">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                        className="text-swan-sage-green"
                      >
                        +
                      </motion.div>
                    </button>
                    
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-swan-botanical-charcoal/70 mt-2"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <h3 className="text-swan-forest-canopy mb-4">Follow Our Journey</h3>
              <p className="text-swan-botanical-charcoal/70 mb-6">
                Stay connected for the latest product launches, botanical tips, and behind-the-scenes content.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: Instagram, handle: '@swanbotanicals', color: 'swan-blush-pink' },
                  { icon: Facebook, handle: 'Swan Botanicals', color: 'swan-leaf-green' },
                  { icon: Twitter, handle: '@swanbotanicals', color: 'swan-sage-green' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className={`w-12 h-12 bg-${social.color}/20 rounded-full flex items-center justify-center hover:bg-${social.color}/30 transition-colors group`}
                  >
                    <social.icon size={20} className={`text-${social.color} group-hover:scale-110 transition-transform`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <h3 className="text-swan-forest-canopy mb-6">Why Choose Swan Botanicals</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Leaf, text: '100% Natural & Organic Ingredients' },
                  { icon: Heart, text: 'Cruelty-Free & Vegan Friendly' },
                  { icon: Award, text: 'Award-Winning Formulations' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-swan-serene-mint/30 rounded-full flex items-center justify-center">
                      <badge.icon size={18} className="text-swan-leaf-green" />
                    </div>
                    <span className="text-swan-botanical-charcoal/70">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-swan-forest-canopy text-white rounded-2xl p-8 text-center"
        >
          <Clock size={32} className="mx-auto mb-4 text-swan-serene-mint" />
          <h3 className="text-xl mb-4">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="block text-swan-serene-mint">Customer Service</span>
              <span>Monday - Friday: 9 AM - 6 PM PST</span>
            </div>
            <div>
              <span className="block text-swan-serene-mint">Studio Visits</span>
              <span>By appointment only</span>
            </div>
            <div>
              <span className="block text-swan-serene-mint">Live Chat</span>
              <span>Monday - Friday: 10 AM - 5 PM PST</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}