
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

interface MealCardProps {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  price: number;
  image: string;
  chef: string;
  tags: string[];
  rating: number;
}

const MealCard = ({
  id,
  name,
  arabicName,
  description,
  price,
  image,
  chef,
  tags,
  rating,
}: MealCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback image if the original fails to load
  const fallbackImage = "/placeholder.svg";
  
  // Force image to be loaded from the URL directly rather than as a module
  const imageUrl = image.startsWith('http') ? image : image;

  return (
    <div 
      className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with proper error handling */}
      <Link to={`/meal/${id}`} className="block">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img
              src={imageError ? fallbackImage : imageUrl}
              alt={name}
              className={cn(
                "w-full h-full object-cover transition-transform duration-700",
                isHovered ? "scale-110" : "scale-100"
              )}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </AspectRatio>
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300",
              isHovered ? "opacity-80" : "opacity-50"
            )} 
          />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-white/90 backdrop-blur-sm text-sand-900 font-arabic"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-colors duration-300",
                isLiked ? "fill-terracotta-500 text-terracotta-500" : "text-sand-900"
              )}
            />
          </button>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/meal/${id}`} className="block hover:text-terracotta-500 transition-colors">
              <h3 className="text-lg font-medium text-sand-900 font-arabic">{arabicName}</h3>
              <p className="text-sm text-sand-700">{name}</p>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-bold text-terracotta-700">{price} ج.م</span>
          </div>
        </div>
        
        <p className="text-sand-600 text-sm font-arabic mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={cn(
                    "w-4 h-4", 
                    i < rating ? "text-saffron-500" : "text-sand-300"
                  )} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-sand-600">({Math.floor(Math.random() * 100) + 10})</span>
          </div>
          
          <span className="text-xs text-sand-600 font-arabic">بواسطة {chef}</span>
        </div>
        
        <button className="mt-4 w-full py-2 px-4 rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white font-arabic text-sm flex items-center justify-center gap-2 transition-colors duration-300">
          <ShoppingCart className="w-4 h-4" />
          <span>أضف إلى السلة</span>
        </button>
      </div>
    </div>
  );
};

export default MealCard;
