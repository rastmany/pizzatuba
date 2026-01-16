
import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  activeCategory: Category;
  onCategoryClick: (category: Category) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryClick }) => {
  const categories = Object.values(Category);

  return (
    <div className="sticky top-16 md:top-20 z-40 w-full bg-white/95 border-b border-gray-100 overflow-x-auto hide-scrollbar">
      <div className="container mx-auto px-4 flex items-center gap-4 md:gap-8 h-12 md:h-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryClick(cat)}
            className={`whitespace-nowrap text-sm md:text-base font-extrabold transition-all duration-200 relative px-1 h-full flex items-center ${
              activeCategory === cat 
                ? 'text-[#FF6900]' 
                : 'text-[#181818] hover:text-[#FF6900]'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF6900] rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
