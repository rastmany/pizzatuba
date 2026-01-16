
import React from 'react';
import { ShoppingCart, User, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../types';
import Button from './Button';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  isCompactMode?: boolean;
  activeCategory?: Category;
  onCategoryClick?: (category: Category) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  isCompactMode = false,
  activeCategory,
  onCategoryClick
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Brand Logo & Delivery */}
        <div className="flex items-center gap-4 md:gap-12">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#FF6900] rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl italic">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black uppercase tracking-tighter text-[#181818] leading-none">Pizzatuba</h1>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Tartu • Eesti</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm text-[#181818] hover:text-[#FF6900] cursor-pointer transition-colors group">
            <div className="p-2 bg-[#F3F3F7] rounded-full group-hover:bg-[#FF6900]/10">
              <MapPin size={18} className="text-[#FF6900]" />
            </div>
            <div>
              <div className="font-extrabold flex items-center gap-1">
                Kättetoimetamine <ChevronDown size={14} />
              </div>
              <div className="text-xs text-[#5C6370]">30–45 min • 4.5 ★</div>
            </div>
          </div>
        </div>

        {/* Compact Category Navigation - appears when scrolled */}
        <AnimatePresence>
          {isCompactMode && onCategoryClick && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:flex items-center gap-2"
            >
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryClick(cat)}
                  className={`text-sm font-bold px-3 py-1.5 rounded-lg transition-all ${activeCategory === cat
                    ? 'text-[#FF6900] bg-[#FF6900]/10'
                    : 'text-[#5C6370] hover:text-[#FF6900] hover:bg-[#F3F3F7]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      {/* Right: User & Cart */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center gap-4 mr-4 text-sm font-bold text-[#5C6370]">
          <a href="#" className="hover:text-[#FF6900]">Kampaaniad</a>
          <a href="#" className="hover:text-[#FF6900]">Meist</a>
        </div>

        <button className="p-2.5 rounded-full bg-[#F3F3F7] text-[#5C6370] hover:bg-[#E2E2E9] transition-colors hidden md:block">
          <User size={20} />
        </button>

        <Button
          onClick={onOpenCart}
          variant="primary"
          className="gap-2 group !px-4 md:!px-6"
        >
          <span className="hidden md:inline">Ostukorv</span>
          <div className="h-5 w-[1px] bg-white/30 hidden md:block mx-1"></div>
          <div className="flex items-center gap-1.5">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="bg-white text-[#FF6900] text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[1.25rem] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Button>
      </div>
    </div>
    </header>
  );
};

export default Header;
