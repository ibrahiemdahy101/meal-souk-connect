
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingCart, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className={cn(
              "bg-terracotta-500 rounded-full p-2 transition-all duration-300",
              isScrolled ? "w-9 h-9" : "w-10 h-10"
            )}>
              <UtensilsCrossed className="w-full h-full text-white" />
            </div>
            <h1 className={cn(
              "font-serif font-bold transition-all duration-300",
              isScrolled ? "text-2xl" : "text-3xl"
            )}>
              <span className="text-terracotta-500">مائدة</span>
              <span className="text-sand-700">مصرية</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'الرئيسية', path: '/' },
            { name: 'الوجبات', path: '/#الوجبات' },
            { name: 'الطباخين', path: '/#الطباخين' },
            { name: 'الاشتراكات', path: '/#الاشتراكات' },
            { name: 'تواصل معنا', path: '/#تواصل-معنا' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-arabic text-sand-900 text-lg hover:text-terracotta-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-sand-900 hover:text-terracotta-500 transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sand-900 hover:text-terracotta-500 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            {[
              { name: 'الرئيسية', path: '/' },
              { name: 'الوجبات', path: '/#الوجبات' },
              { name: 'الطباخين', path: '/#الطباخين' },
              { name: 'الاشتراكات', path: '/#الاشتراكات' },
              { name: 'تواصل معنا', path: '/#تواصل-معنا' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-arabic text-sand-900 text-lg hover:text-terracotta-500 transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center py-2">
              <Link to="/cart" className="relative flex items-center space-x-2 text-sand-900">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-arabic">السلة</span>
                <span className="bg-terracotta-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
