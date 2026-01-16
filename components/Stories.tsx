
import React from 'react';
import { STORIES } from '../constants';

const Stories: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar py-4 mb-8">
      {STORIES.map((story) => (
        <div 
          key={story.id}
          className="flex-shrink-0 w-24 md:w-28 group cursor-pointer"
        >
          <div className={`aspect-square rounded-[24px] overflow-hidden p-1 ring-2 ring-transparent group-hover:ring-[#FF6900] transition-all duration-300 ${story.color}`}>
            <img 
              src={story.image} 
              alt={story.title} 
              className="w-full h-full object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <p className="text-[11px] md:text-xs font-bold text-center mt-2 text-[#181818] group-hover:text-[#FF6900] transition-colors line-clamp-1">
            {story.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
