
import React from 'react';
import { Leaf } from 'lucide-react';
import { Product } from '../types';
import ProductButton from './ProductButton';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onRemove: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, quantity, onAdd, onRemove }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[24px] p-4 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] h-full">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-[#FF6900] text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase">Uus</span>
        )}
        {product.isVegetarian && (
          <div className="absolute top-2 right-2 bg-green-100 text-green-600 p-1 rounded-lg">
            <Leaf size={14} fill="currentColor" />
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-black text-[#181818] mb-1.5 group-hover:text-[#FF6900] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#5C6370] leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto pt-2">
          <ProductButton 
            quantity={quantity} 
            price={product.price} 
            onAdd={() => onAdd(product)} 
            onRemove={() => onRemove(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
