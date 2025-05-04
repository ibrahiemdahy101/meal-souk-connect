
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Calendar, ShoppingCart, Clock } from 'lucide-react';

interface PlanProps {
  id: string;
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  mealsPerWeek: number;
  recommended?: boolean;
}

const plans: PlanProps[] = [
  {
    id: 'basic',
    title: 'الأساسية',
    price: 299,
    period: 'شهرياً',
    description: 'مناسبة للأشخاص المنفردين أو الأزواج',
    features: [
      'وجبة واحدة يومياً',
      'اختيار من 10 وجبات أسبوعياً',
      'توصيل مجاني',
      'دعم العملاء',
    ],
    mealsPerWeek: 7,
  },
  {
    id: 'family',
    title: 'العائلية',
    price: 499,
    period: 'شهرياً',
    description: 'مثالية للعائلات الصغيرة',
    features: [
      'وجبتان يومياً',
      'اختيار من 15 وجبة أسبوعياً',
      'توصيل مجاني',
      'دعم العملاء على مدار الساعة',
      'خيارات غذائية متنوعة',
    ],
    mealsPerWeek: 14,
    recommended: true,
  },
  {
    id: 'premium',
    title: 'المميزة',
    price: 799,
    period: 'شهرياً',
    description: 'الأفضل للعائلات الكبيرة',
    features: [
      '3 وجبات يومياً',
      'اختيار من كل الوجبات المتاحة',
      'توصيل مجاني وسريع',
      'دعم العملاء على مدار الساعة',
      'خيارات غذائية متنوعة',
      'طلبات خاصة متاحة',
    ],
    mealsPerWeek: 21,
  },
];

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('family');

  return (
    <section className="section bg-sand-50 py-20" id="الاشتراكات">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-4 py-1 bg-olive-100 text-olive-700 font-arabic rounded-full text-sm font-medium">
            خطط الاشتراك
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic">
            اختر خطة الاشتراك المناسبة لك
          </h2>
          <p className="text-sand-700 text-lg font-arabic">
            اشترك في خطة تناسب احتياجاتك الغذائية وميزانيتك، مع مرونة في الاختيار والتعديل في أي وقت
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={cn(
                "relative rounded-2xl overflow-hidden transition-all duration-500",
                selectedPlan === plan.id 
                  ? "bg-white shadow-lg transform scale-105 z-10" 
                  : "bg-white/80 shadow-sm hover:shadow-md hover:-translate-y-1",
                plan.recommended && "border-2 border-terracotta-500"
              )}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-terracotta-500 text-white font-arabic text-sm font-medium py-1 text-center">
                  الأكثر شيوعاً
                </div>
              )}
              
              <div className={cn(
                "p-6", 
                plan.recommended && "pt-10"
              )}>
                <h3 className="text-xl font-bold mb-2 font-arabic">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sand-600 font-arabic"> ر.س {plan.period}</span>
                </div>
                <p className="text-sand-700 mb-6 font-arabic">{plan.description}</p>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-sand-100 rounded-full px-3 py-1.5">
                    <ShoppingCart className="w-4 h-4 text-terracotta-500" />
                    <span className="text-sm font-arabic">{plan.mealsPerWeek} وجبة أسبوعياً</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive-500 mt-0.5 shrink-0" />
                      <span className="text-sand-700 font-arabic">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedPlan(plan.id)}
                  className={cn(
                    "w-full py-3 px-4 rounded-lg font-arabic text-center transition-all duration-300",
                    selectedPlan === plan.id
                      ? "bg-terracotta-500 text-white hover:bg-terracotta-600"
                      : "bg-sand-100 text-sand-900 hover:bg-sand-200"
                  )}
                >
                  {selectedPlan === plan.id ? 'الخطة المختارة' : 'اختر هذه الخطة'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sand-600 mb-4 font-arabic">
            جميع الخطط تشمل إمكانية الإلغاء في أي وقت، وتوصيل مجاني للوجبات
          </p>
          <button className="btn-primary font-arabic inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            ابدأ الاشتراك الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
