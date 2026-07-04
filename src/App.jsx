import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Compass, ShoppingBag, Star, Menu, X, ArrowUpRight } from 'lucide-react';

export default function HouseCoffeeWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Top trending items scraped directly from local user evaluation signals
  const popularItems = [
    { name: "Pistachio Latte", type: "Beverage", desc: "Creamy espresso with distinct, artisanal rich pistachio notes.", count: 19 },
    { name: "Spanish Latte", type: "Beverage", desc: "Perfectly balanced specialty espresso cut with sweet texturized milk.", count: 25 },
    { name: "Lotus Cheesecake", type: "Dessert", desc: "Velvety smooth cheese base resting on a crunchy speculoos crust.", count: 15 },
    { name: "Artisanal Brownie", type: "Dessert", desc: "Fudgy, rich dark chocolate core served warm with a crackly top.", count: 14 }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F9F6F0] font-sans selection:bg-[#b38f4d] selection:text-black">
      
      {/* Cinematic Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b38f4d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8c6d31]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. ANIMATED NAVIGATION BAR */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#F9F6F0]/5 px-6 py-4 flex justify-between items-center"
      >
        <div className="flex items-center space-x-2 tracking-[0.3em] font-light text-xl">
          <span className="font-semibold text-[#b38f4d]">HOUSE</span>
          <span className="text-xs text-[#F9F6F0]/60 border-l border-[#F9F6F0]/30 pl-2">CANTT</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-light">
          <a href="#about" className="hover:text-[#b38f4d] transition-colors">The Vibe</a>
          <a href="#menu" className="hover:text-[#b38f4d] transition-colors">Signature Menu</a>
          <a href="#reviews" className="hover:text-[#b38f4d] transition-colors">Stories</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://www.foodpanda.pk/restaurant/unsd/house-specialty-coffee-cantt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#b38f4d] hover:bg-[#96773f] text-black px-5 py-2 rounded-full font-medium text-xs tracking-wider transition-all transform hover:scale-105"
          >
            <span>ORDER ON FOODPANDA</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#F9F6F0]">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[60px] left-0 w-full bg-[#0D0D0D] border-b border-[#F9F6F0]/10 z-40 flex flex-col p-6 space-y-4 text-center tracking-widest uppercase font-light"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2">The Vibe</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="py-2">Signature Menu</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="py-2">Stories</a>
            <a 
              href="https://www.foodpanda.pk/restaurant/unsd/house-specialty-coffee-cantt"
              className="bg-[#b38f4d] text-black py-3 rounded-full font-medium text-xs"
            >
              ORDER NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO DISPLAY SCREEN (Cinematic Entrance) */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="text-center max-w-4xl z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xs tracking-[0.5em] uppercase mb-4 text-[#b38f4d]"
          >
            Specialty Coffee & Luxury Desserts
          </motion.p>
          
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-serif tracking-tight font-light mb-8 leading-tight"
          >
            Where Aesthetic <br />Meets <span className="italic font-normal text-[#b38f4d]">Fine Roast</span>.
          </motion.h1>

          <motion.div 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a 
              href="#menu" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-[#F9F6F0]/30 hover:border-[#b38f4d] px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore Menu</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/xYjyqwj6nuBNwX9g6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#F9F6F0] text-black hover:bg-[#b38f4d] hover:text-black px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Find Us in Cantt</span>
            </a>
          </motion.div>
        </div>

        {/* Ambient Subtle Geometric Line Animation */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute opacity-10 border border-[#F9F6F0]/20 w-[600px] h-[600px] rounded-full pointer-events-none"
        />
      </section>

      {/* 3. EXPERIENCE & AMBIANCE SECTION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#F9F6F0]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-xs tracking-[0.3em] text-[#b38f4d] uppercase font-semibold">The Architecture of Vibe</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">Rooftop Views & Calm Indoor Havens</h2>
            <p className="text-[#F9F6F0]/70 font-light leading-relaxed">
              Designed as the perfect breakout space in Lahore Cantt, HOUSE blends striking structural mood lighting with multi-level seating. Whether you are finding sanctuary inside to catch up on work, or enjoying the crisp winter air under the stars on our premium rooftop deck, every corner is explicitly built to be a canvas for visual storytelling.
            </p>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 0.8, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="h-[400px] bg-gradient-to-tr from-[#1a1a1a] to-[#2d2d2d] rounded-2xl flex items-center justify-center border border-[#F9F6F0]/10 shadow-2xl relative overflow-hidden"
          >
            {/* Elegant visual placeholder referencing image dynamic aesthetics */}
            <div className="text-center p-8">
              <p className="text-sm italic text-[#b38f4d] tracking-widest mb-2">Cinematic Rooftop & Cozy Sardi Vibe</p>
              <p className="text-xs text-[#F9F6F0]/40">[ Visual Asset Frame Location ]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. VISUAL MENU GRID */}
      <section id="menu" className="py-24 bg-[#111111] px-6 border-t border-b border-[#F9F6F0]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-[#b38f4d] uppercase font-semibold">Handcrafted Flavors</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light mt-2">The Signature Collection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8, borderColor: 'rgba(179, 143, 77, 0.4)' }}
                className="bg-[#0D0D0D] border border-[#F9F6F0]/5 p-6 rounded-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] tracking-widest uppercase bg-[#F9F6F0]/5 text-[#b38f4d] px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-serif mt-4 mb-2 font-medium">{item.name}</h3>
                  <p className="text-xs text-[#F9F6F0]/60 font-light line-clamp-3 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F9F6F0]/5 flex items-center justify-between text-xs text-[#F9F6F0]/40">
                  <span className="flex items-center"><Star className="w-3 h-3 text-[#b38f4d] mr-1 fill-[#b38f4d]" /> Community Favorite</span>
                  <span>⭐ Top Pick</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIAL CAROUSEL */}
      <section id="reviews" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <span className="text-xs tracking-[0.3em] text-[#b38f4d] uppercase font-semibold">Verified Guest Logs</span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-12">Conversations & Content Creators</h2>
        
        <div className="bg-[#111111] border border-[#F9F6F0]/5 p-8 md:p-12 rounded-2xl relative">
          <p className="text-lg md:text-xl italic font-light leading-relaxed mb-6">
            "Went to get my morning coffee at around 10am. The place gave such a peaceful and relaxing vibe, one where you could sit quietly and read. The aroma of coffee, Lahore ki sardi, and not to forget the coffee itself was really good."
          </p>
          <div className="flex justify-center items-center space-x-2 text-xs text-[#b38f4d] tracking-widest uppercase">
            <span className="font-semibold text-[#F9F6F0]">Salman Abdul Salam</span>
            <span>•</span>
            <span>Local Guide Review</span>
          </div>
        </div>
      </section>

      {/* 6. STATIC ACTION FOOTER */}
      <footer className="bg-[#080808] text-xs text-[#F9F6F0]/40 py-12 px-6 border-t border-[#F9F6F0]/5 text-center">
        <p className="tracking-widest uppercase mb-4 text-[#b38f4d] font-semibold">HOUSE SPECIALTY COFFEE & DESSERTS</p>
        <p className="mb-2">📍 Cantt, Lahore, Pakistan</p>
        <p className="mb-6">⏱️ Open Daily for Morning Brews & Late Night Rooftop Gatherings</p>
        <div className="text-[10px] text-[#F9F6F0]/20">
          &copy; {new Date().getFullYear()} HOUSE Cantt. Designed dynamically for absolute immersion.
        </div>
      </footer>
    </div>
  );
}