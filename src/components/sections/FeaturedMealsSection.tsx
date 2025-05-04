
import React from 'react';
import MealCard from '@/components/MealCard';
import { mealData } from '@/data/mealData';

const FeaturedMealsSection = () => {
  return (
    <section className="section py-20 bg-sand-50" id="الوجبات">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in-section">
          <span className="inline-block mb-3 px-4 py-1 bg-terracotta-100 text-terracotta-700 font-arabic rounded-full text-sm font-medium">
            المأكولات المميزة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic">
            استمتع بأشهى المأكولات المصرية
          </h2>
          <p className="text-sand-700 text-lg font-arabic">
            مجموعة متنوعة من أشهى الوجبات المصرية المنزلية المعدة بوصفات تقليدية أصيلة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
          {mealData.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </div>
        
        <div className="text-center mt-10 fade-in-section">
          <button className="btn-primary font-arabic">
            عرض جميع الوجبات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMealsSection;
