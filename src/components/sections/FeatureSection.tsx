
import React from 'react';
import { ChefHat, ShoppingCart, Calendar } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block mb-3 px-4 py-1 bg-saffron-100 text-saffron-700 font-arabic rounded-full text-sm font-medium">
            لماذا مائدة مصرية؟
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic">
            أطباق مصرية أصيلة بمذاق مميز
          </h2>
          <p className="text-sand-700 text-lg font-arabic">
            نقدم لك تجربة طعام فريدة مع أشهى الوصفات المصرية الأصيلة من مطابخ أمهر الطباخين المصريين
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'طعام مصري أصيل',
              description: 'وجبات معدة بحب وخبرة من مطابخ منزلية مصرية عريقة بوصفات تقليدية',
              icon: <ChefHat className="w-8 h-8" />,
              color: 'bg-terracotta-100 text-terracotta-600',
            },
            {
              title: 'اشتراكات مرنة',
              description: 'اختر خطة اشتراك شهرية أو أسبوعية تناسبك ويمكنك تعديلها أو إلغاؤها في أي وقت',
              icon: <Calendar className="w-8 h-8" />,
              color: 'bg-olive-100 text-olive-600',
            },
            {
              title: 'توصيل للمنزل',
              description: 'نوصل وجباتك الطازجة بعناية فائقة للحفاظ على جودتها ومذاقها الأصيل',
              icon: <ShoppingCart className="w-8 h-8" />,
              color: 'bg-saffron-100 text-saffron-700',
            },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="fade-in-section text-center p-6 rounded-xl bg-white shadow-sm border border-sand-100 hover:shadow-md transition-all duration-500"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-full ${feature.color} mx-auto mb-4 flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-arabic">{feature.title}</h3>
              <p className="text-sand-700 font-arabic">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
