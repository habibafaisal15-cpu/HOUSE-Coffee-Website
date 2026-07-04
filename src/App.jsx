import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Compass, Star, Menu, X, ArrowUpRight } from 'lucide-react';

// Importing your local gallery assets
import imgCroissant from './assets/house-coffee-gallery-cross.jpeg';
import imgCups from './assets/house-coffee-gallery-cups.jpeg';
import imgDessert from './assets/house-coffee-gallery-dess.jpeg';

export default function HouseCoffeeWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryImages = [
    { src: imgCroissant, label: "Flaky Artisanal Croissants" },
    { src: imgCups, label: "Premium Specialty Brews" },
    { src: imgDessert, label: "Luxury Signature Desserts" }
  ];

  const popularItems = [
    { name: "Pistachio Latte", type: "Beverage", desc: "Creamy espresso with distinct, artisanal rich pistachio notes." },
    { name: "Spanish Latte", type: "Beverage", desc: "Perfectly balanced specialty espresso cut with sweet texturized milk." },
    { name: "Lotus Cheesecake", type: "Dessert", desc: "Velvety smooth cheese base resting on a crunchy speculoos crust." },
    { name: "Artisanal Brownie", type: "Dessert", desc: "Fudgy, rich dark chocolate core served warm with a crackly top." }
  ];

  // AUTOMATIC TRANSITION TIMER
  useEffect(() => {
    // Automatically switch images every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // 3D INTERACTIVE MOUSE TRACKING
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth custom tilt limits
    const rotateX = -(y / (box.height / 2)) * 12; 
    const rotateY = (x / (box.width / 2)) * 12;
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    // Smooth snap-back when mouse exits the frame area
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F9F6F0] font-sans selection:bg-[#b38f4d] selection:text-black overflow-x-hidden">
      
      {/* Cinematic Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b38f4d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8c6d31]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. NAVIGATION BAR */}
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

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#F9F6F0] z-50 relative">
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
            className="fixed top-0 left-0 w-full h-screen bg-[#0D0D0D] z-40 flex flex-col justify-center items-center space-y-6 text-center tracking-widest uppercase font-light px-6"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 hover:text-[#b38f4d]">The Vibe</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 hover:text-[#b38f4d]">Signature Menu</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 hover:text-[#b38f4d]">Stories</a>
            <a 
              href="https://www.foodpanda.pk/restaurant/unsd/house-specialty-coffee-cantt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs bg-[#b38f4d] text-black py-3 rounded-full font-medium text-xs tracking-widest"
            >
              ORDER NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO DISPLAY SCREEN */}
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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-[#F9F6F0]/30 hover:border-[#b38f4d] px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore Menu</span>
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#F9F6F0] text-black hover:bg-[#b38f4d] hover:text-black px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Find Us in Cantt</span>
            </a>
          </div>
        </div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute opacity-10 border border-[#F9F6F0]/20 w-[600px] h-[600px] rounded-full pointer-events-none"
        />
      </section>

      {/* 3. EXPERIENCE & AMBIANCE SECTION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#F9F6F0]/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          
          {/* 3D Self-Playing Parallax Image Frame Container */}
          <div className="flex justify-center items-center perspective-[1000px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                transform: transformStyle,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s ease-out'
              }}
              className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl bg-neutral-950/40 border border-neutral-800/60 p-3 shadow-2xl overflow-hidden group select-none"
            >
              {/* Glossy light reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F9F6F0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Seamless 3D Animated Slide Swap Layer */}
              <div className="w-full h-full relative rounded-xl overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    src={galleryImages[currentIndex].src} 
                    alt={galleryImages[currentIndex].label}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                  />
                </AnimatePresence>
              </div>

              {/* Floating Carousel Caption Box */}
              <div 
                style={{ transform: 'translateZ(55px)' }}
                className="absolute bottom-6 left-6 right-6 text-center bg-[#0D0D0D]/80 backdrop-blur-md border border-[#F9F6F0]/10 p-3 rounded-xl z-20 transition-colors group-hover:border-[#b38f4d]/30"
              >
                <p className="text-xs italic font-serif text-[#b38f4d] tracking-widest">
                  {galleryImages[currentIndex].label}
                </p>
              </div>

              {/* Minimalist Dashboard Progress Dot Matrix */}
              <div className="absolute top-6 right-6 flex space-x-1.5 z-30" style={{ transform: 'translateZ(40px)' }}>
                {galleryImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#b38f4d] w-4' : 'bg-white/30'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
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
          © {new Date().getFullYear()} HOUSE Cantt. Designed dynamically for absolute immersion.
        </div>
      </footer>
    </div>
  );
}