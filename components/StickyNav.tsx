
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';

interface StickyNavProps {
  id?: string;
  activeCategory: Category;
  onCategoryClick: (category: Category) => void;
  isCompactMode?: boolean;
}

const StickyNav: React.FC<StickyNavProps> = ({
  id,
  activeCategory,
  onCategoryClick,
  isCompactMode = false
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const categories = Object.values(Category);

  useEffect(() => {
    const handleScroll = () => {
      // Плавное появление липкой панели после прокрутки первого блока
      const scrollThreshold = 400;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      id={id}
      initial={false}
      animate={{
        opacity: isCompactMode ? 0 : 1,
        y: isCompactMode ? -10 : 0,
        boxShadow: isSticky ? "0 10px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
        backgroundColor: isSticky ? "rgba(255, 255, 255, 0.95)" : "rgba(243, 243, 247, 0)",
        pointerEvents: isCompactMode ? 'none' : 'auto'
      }}
      transition={{ duration: 0.3 }}
      className={`sticky top-16 md:top-20 z-40 w-full transition-all duration-300 ${isSticky ? 'backdrop-blur-xl py-2 border-b border-gray-100' : 'py-4'
        }`}
    >
      <div className="container mx-auto px-4 overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryClick(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 transform active:scale-95 ${activeCategory === cat
                ? 'bg-[#FF6900] text-white shadow-lg shadow-[#FF6900]/30'
                : 'bg-white text-[#5C6370] hover:text-[#FF6900] shadow-sm'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
