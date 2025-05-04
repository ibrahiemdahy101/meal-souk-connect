
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChefHat } from 'lucide-react';

interface VendorCardProps {
  id: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  totalMeals: number;
  description: string;
  location: string;
}

const VendorCard = ({
  id,
  name,
  image,
  specialty,
  rating,
  totalMeals,
  description,
  location,
}: VendorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback image if the original fails to load
  const fallbackImage = "/placeholder.svg";

  return (
    <div 
      className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
          <img
            src={imageError ? fallbackImage : image}
            alt={name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
          
          {/* Specialty Badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm">
              <ChefHat className="w-3 h-3 text-terracotta-500" />
              <span className="text-xs font-medium text-sand-900 font-arabic">{specialty}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-5 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-sand-900 font-arabic">{name}</h3>
              <div className="flex items-center bg-saffron-100 px-2 py-1 rounded-md">
                <Star className="w-4 h-4 text-saffron-500 mr-1" />
                <span className="text-sm font-medium text-sand-900">{rating.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="flex items-center text-sand-600 text-sm mb-3">
              <span className="font-arabic">{location}</span>
              <span className="mx-2">•</span>
              <span className="font-arabic">{totalMeals} وجبة</span>
            </div>
            
            <p className="text-sand-700 text-sm font-arabic mb-4 line-clamp-2 md:line-clamp-3">{description}</p>
          </div>
          
          <div className="mt-auto">
            <button className="w-full py-2 px-4 rounded-lg border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-50 font-arabic text-sm transition-colors duration-300">
              عرض الوجبات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
