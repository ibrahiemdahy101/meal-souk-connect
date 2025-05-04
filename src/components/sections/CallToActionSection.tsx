
import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603917912619-1a66b5349e3b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3" 
          alt="طعام مصري" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-900 to-sand-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <span className="inline-block mb-3 px-4 py-1 bg-terracotta-500/20 backdrop-blur-sm text-white font-arabic rounded-full text-sm font-medium">
            انضم الآن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-arabic">
            استمتع بتجربة طعام مصري أصيل
          </h2>
          <p className="text-sand-200 text-lg mb-8 font-arabic">
            انضم لأكثر من 1500 مشترك يستمتعون بألذ الوجبات المصرية المنزلية يومياً، اشترك الآن واحصل على خصم 15% على أول شهر
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto btn-primary font-arabic">
              ابدأ الاشتراك الآن
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-3 font-medium transition-all duration-300 font-arabic">
              تعرف على المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
