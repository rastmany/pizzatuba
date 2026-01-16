
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';
import Button from './Button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={onClose}
          />
          
          {/* Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#F9F9FB]">
                <h2 className="text-xl font-black text-[#181818] flex items-center gap-2">
                  Ostukorv <span className="text-[#5C6370] text-sm font-bold">({items.length})</span>
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-48 h-48 bg-[#F3F3F7] rounded-full flex items-center justify-center mb-6"
                    >
                      <ShoppingBag size={80} className="text-gray-300" />
                    </motion.div>
                    <h3 className="text-xl font-black mb-2">Sinu ostukorv on tühi</h3>
                    <p className="text-[#5C6370] mb-8">Lisa siia midagi maitsvat!</p>
                    <Button onClick={onClose} variant="primary">Tagasi menüü juurde</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div 
                        layout
                        key={item.id} 
                        className="flex gap-4 p-3 rounded-2xl border border-gray-50 hover:border-gray-100 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-extrabold text-[#181818] truncate">{item.name}</h4>
                            <span className="font-black text-sm">{(item.price * item.quantity).toFixed(2)}€</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center bg-[#F3F3F7] rounded-lg p-0.5">
                              <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-[#FF6900]"><Minus size={14} /></button>
                              <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                              <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-[#FF6900]"><Plus size={14} /></button>
                            </div>
                            <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500"><Trash2 size={16} /></button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-black">Kokku</span>
                    <span className="text-2xl font-black text-[#FF6900]">{total.toFixed(2)} €</span>
                  </div>
                  <Button className="w-full" size="lg">Vormista tellimus</Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
