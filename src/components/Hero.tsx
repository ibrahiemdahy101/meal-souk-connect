import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 bg-cover bg-center overflow-hidden" style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3")'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 bg-sand-100/90 backdrop-blur-sm text-terracotta-600 font-arabic rounded-full text-sm font-medium animate-fade-in">
            أشهى المأكولات المصرية الأصيلة توصل لباب بيتك
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up" style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
            <span className="font-arabic block mb-2">مأكولات مصرية أصيلة</span>
            <span className="text-sand-100">من بيوت أمهر الطباخين</span>
          </h1>
          
          <p className="font-arabic text-lg md:text-xl text-sand-100 mb-8 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            اشترك الآن واستمتع بأشهى المأكولات المصرية الطازجة المحضرة بأيدي ماهرة، توصل إلى باب منزلك
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <button className="btn-primary w-full sm:w-auto font-arabic">
              ابدأ الاشتراك الآن
            </button>
            <button className="btn-secondary w-full sm:w-auto font-arabic">
              تصفح الوجبات
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="User" className="w-full h-full object-cover" />
                </div>)}
            </div>
            <div className="ml-4 rtl:mr-4 rtl:ml-0 font-arabic text-sand-100">
              انضم لأكثر من <span className="font-bold text-white">١٥٠٠+</span> مشترك سعيد
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      
    </section>;
};
export default Hero;