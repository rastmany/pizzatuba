
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ProductButtonProps {
  quantity: number;
  price: number;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductButton: React.FC<ProductButtonProps> = ({ quantity, price, onAdd, onRemove }) => {
  const isAdded = quantity > 0;

  return (
    <motion.div 
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative h-10 flex items-center overflow-hidden rounded-full font-extrabold ${
        isAdded ? 'bg-green-500 text-white min-w-[110px]' : 'bg-[#FFF0E6] text-[#FF6900] hover:bg-[#FFD2B3] min-w-[120px]'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isAdded ? (
          <motion.button
            key="add-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={onAdd}
            className="w-full h-full px-4 flex items-center justify-between gap-2"
          >
            <span>Vali</span>
            <span className="text-xs opacity-60">{price.toFixed(2)} €</span>
          </motion.button>
        ) : (
          <motion.div
            key="qty-ctrl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full h-full flex items-center justify-between px-2"
          >
            <button 
              onClick={onRemove}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
            >
              <Minus size={16} strokeWidth={3} />
            </button>
            <span className="text-sm select-none">{quantity}</span>
            <button 
              onClick={onAdd}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
            >
              <Plus size={16} strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductButton;
