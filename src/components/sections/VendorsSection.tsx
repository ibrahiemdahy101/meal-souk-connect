
import React from 'react';
import VendorCard from '@/components/VendorCard';
import { vendorData } from '@/data/vendorData';

const VendorsSection = () => {
  return (
    <section className="section py-20 bg-white" id="الطباخين">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in-section">
          <span className="inline-block mb-3 px-4 py-1 bg-olive-100 text-olive-700 font-arabic rounded-full text-sm font-medium">
            طباخين من البيت
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic">
            تعرف على طباخينا المهرة
          </h2>
          <p className="text-sand-700 text-lg font-arabic">
            خبرات مطبخية عريقة من طباخين موهوبين يعدون لك ألذ المأكولات المصرية من منازلهم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
          {vendorData.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
        
        <div className="text-center mt-10 fade-in-section">
          <button className="btn-primary font-arabic">
            تعرف على جميع الطباخين
          </button>
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
