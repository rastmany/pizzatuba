
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Category, Product, CartItem } from './types';
import { MENU_ITEMS } from './constants';
import { useScrollNavigation } from './hooks/useScrollNavigation';
import Header from './components/Header';
import StickyNav from './components/StickyNav';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import Stories from './components/Stories';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.PIZZAS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isCompactMode } = useScrollNavigation();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    if (delta > 0) {
      const prod = MENU_ITEMS.find(p => p.id === id);
      if (prod) addToCart(prod);
    } else {
      removeFromCart(id);
    }
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <LayoutGroup>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-[#F3F3F7]"
      >
        <Header
          cartCount={cartCount}
          onOpenCart={() => setIsCartOpen(true)}
          isCompactMode={isCompactMode}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryChange}
        />

        <main className="container mx-auto px-4 py-8 flex-grow">
          {/* Hero Section with Parallax-like entrance */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative rounded-[40px] overflow-hidden h-[400px] shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-12 flex flex-col justify-end">
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-5xl md:text-7xl font-black text-white mb-4"
              >
                Pitsa, mis on <br /><span className="text-[#FF6900]">Mulgimaa parim.</span>
              </motion.h1>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-white/80 text-lg font-bold max-w-lg"
              >
                Värske tooraine, käsitööna valminud tainas ja armastus igas viilus.
              </motion.p>
            </div>
          </motion.section>

          <Stories />

          <StickyNav
            id="sticky-nav"
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryChange}
            isCompactMode={isCompactMode}
          />

          <div className="space-y-24 mt-12">
            {Object.values(Category).map((cat, index) => (
              <motion.section
                key={cat}
                id={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-48"
              >
                <h2 className="text-4xl font-black text-[#181818] mb-10 flex items-center gap-6">
                  {cat} <span className="h-[2px] flex-1 bg-gray-200" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {MENU_ITEMS.filter(item => item.category === cat).map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      quantity={cartItems.find(i => i.id === item.id)?.quantity || 0}
                      onAdd={addToCart}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </main>

        <Footer />

        {/* Floating Action Button (FAB) View Order */}
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.button
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, backgroundColor: "#E55F00" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="fixed bottom-8 right-8 z-50 bg-[#FF6900] text-white px-8 py-4 rounded-full font-black shadow-2xl flex items-center gap-3 group overflow-hidden"
            >
              <ShoppingBag size={20} />
              <span>Vaata tellimust</span>
              <div className="h-5 w-[1px] bg-white/30 mx-1"></div>
              <span className="text-sm">{cartTotal.toFixed(2)}€</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          )}
        </AnimatePresence>

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      </motion.div>
    </LayoutGroup>
  );
};

export default App;
