
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sand-900 text-sand-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              <span className="text-terracotta-400">مائدة</span>
              <span className="text-sand-200">مصرية</span>
            </h2>
            <p className="font-arabic mb-6 text-sand-400">
              نوصل إليك أشهى الأكلات المصرية المحضرة بحب وخبرة من أفضل الطباخين في القاهرة
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center transition-colors duration-300 hover:bg-terracotta-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center transition-colors duration-300 hover:bg-terracotta-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center transition-colors duration-300 hover:bg-terracotta-600">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-arabic">روابط سريعة</h3>
            <ul className="space-y-3">
              {['الرئيسية', 'الوجبات', 'الطباخين', 'الاشتراكات', 'كيف نعمل', 'عن الشركة'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-arabic text-sand-400 hover:text-terracotta-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-arabic">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-terracotta-400 mt-0.5 shrink-0" />
                <span className="font-arabic text-sand-400 mr-3 rtl:mr-0 rtl:ml-3">
                  شارع التحرير، وسط البلد، القاهرة، مصر
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-terracotta-400 shrink-0" />
                <a href="tel:+20123456789" className="font-arabic text-sand-400 hover:text-terracotta-400 transition-colors duration-300 mr-3 rtl:mr-0 rtl:ml-3">
                  +20 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-terracotta-400 shrink-0" />
                <a href="mailto:info@maedamasrya.com" className="font-arabic text-sand-400 hover:text-terracotta-400 transition-colors duration-300 mr-3 rtl:mr-0 rtl:ml-3">
                  info@maedamasrya.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-arabic">النشرة البريدية</h3>
            <p className="font-arabic text-sand-400 mb-4">
              اشترك في نشرتنا البريدية للحصول على أحدث العروض والوجبات الجديدة
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-sand-800 border border-sand-700 rounded-lg px-4 py-2 text-white font-arabic focus:border-terracotta-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-lg px-4 py-2 font-arabic transition-colors duration-300"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-sand-800 mt-12 pt-8 text-center">
          <p className="text-sand-500 font-arabic">
            © {new Date().getFullYear()} مائدة مصرية. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
