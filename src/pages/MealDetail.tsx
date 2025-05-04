import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingCart, 
  Star, 
  Clock, 
  UtensilsCrossed, 
  Users, 
  ChefHat,
  Heart,
  Minus,
  Plus,
  Share2
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data for meals - in a real app this would come from a database
const meals = [
  {
    id: 'm1',
    name: 'Koshari',
    arabicName: 'كشري',
    description: 'طبق شعبي مصري أصيل من الأرز والمكرونة والعدس مع صلصة الطماطم والبصل المقرمش',
    longDescription: 'يعتبر الكشري من أشهر الأطباق المصرية وأكثرها شعبية. يتكون من مزيج لذيذ من الأرز والمكرونة والعدس، مغطى بصلصة طماطم حارة وبصل مقرمش. يعود تاريخ هذا الطبق إلى القرن التاسع عشر، وهو اليوم يعتبر الوجبة الوطنية في مصر، متوفر في الشوارع والمطاعم في جميع أنحاء البلاد.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.0.3',
    chef: 'أم أحمد',
    chefId: 'v1',
    tags: ['شعبي', 'نباتي'],
    rating: 4.8,
    reviews: 158,
    ingredients: ['أرز', 'مكرونة صغيرة', 'عدس', 'حمص', 'بصل', 'ثوم', 'صلصة طماطم', 'خل', 'بهارات'],
    prepTime: 45,
    servings: 4,
    calories: 450,
    allergens: ['قمح', 'قد يحتوي على آثار مكسرات'],
    relatedMeals: ['m2', 'm4']
  },
  {
    id: 'm2',
    name: 'Molokhia with Rabbit',
    arabicName: 'ملوخية بالأرانب',
    description: 'ملوخية مصرية تقليدية طازجة مع أرانب مشوية ومطهوة على الفحم مع الأرز',
    longDescription: 'الملوخية من الأطباق المصرية العريقة والمميزة بمذاقها الفريد. تحضر من أوراق الملوخية الخضراء الطازجة المفرومة ناعماً، وتطهى مع مرق لحم الأرانب المتبل بالثوم والكزبرة والبهارات المصرية الأصيلة. تقدم مع أرز أبيض وقطع من لحم الأرانب المشوي. وجبة غنية بالعناصر الغذائية ومحببة لدى المصريين.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1626873264133-c7582538a671?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    chef: 'الحاج محمود',
    chefId: 'v2',
    tags: ['تقليدي', 'لحوم'],
    rating: 4.9,
    reviews: 86,
    ingredients: ['ملوخية خضراء', 'أرانب', 'أرز', 'ثوم', 'كزبرة', 'زيت', 'بهارات', 'مرق دجاج'],
    prepTime: 90,
    servings: 3,
    calories: 520,
    allergens: [],
    relatedMeals: ['m3', 'm1']
  },
  {
    id: 'm3',
    name: 'Stuffed Pigeon',
    arabicName: 'حمام محشي',
    description: 'حمام محشي بالفريك والأرز المتبل بالبهارات المصرية الأصيلة',
    longDescription: 'الحمام المحشي من أشهى الأطباق المصرية الفاخرة. يتم تنظيف الحمام جيدًا ثم حشوه بخليط الفريك أو الأرز المتبل بالبهارات وا��مكسرات. يطهى الحمام في مرق غني بالتوابل المصرية التقليدية حتى ينضج تمامًا. يقدم ساخنًا مع المحشي بداخله، ويعتبر من الأطباق المميزة في المناسبات والولائم في مصر.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1594221708779-94832f4320ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    chef: 'الشيف سامي',
    chefId: 'v3',
    tags: ['فاخر', 'تقليدي'],
    rating: 4.7,
    reviews: 72,
    ingredients: ['حمام', 'فريك', 'أرز', 'بصل', 'بهارات', 'مكسرات', 'زيت', 'مرق دجاج'],
    prepTime: 120,
    servings: 2,
    calories: 680,
    allergens: ['مكسرات'],
    relatedMeals: ['m2', 'm4']
  },
  {
    id: 'm4',
    name: 'Ful Medames',
    arabicName: 'فول مدمس',
    description: 'فول مدمس مصري بزيت الزيتون والليمون والكمون والثوم مع الخبز البلدي',
    longDescription: 'الفول المدمس هو طبق الإفطار الأكثر شعبية في مصر منذ قرون. يحضر من حبوب الفول المطبوخة جيدًا مع الثوم وزيت الزيتون والكمون والليمون والملح حسب الرغبة. يهرس الفول جزئيًا للحصول على القوام الشهي، ويقدم مع الخبز البلدي الطازج والخضروات مثل الطماطم والبصل والفلفل. بعض الناس يفضلون إضافة البيض المسلوق أو الفلفل الحار للطبق.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1626109847257-8b94aad99dcd?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.0.3',
    chef: 'أم محمد',
    chefId: 'v1',
    tags: ['إفطار', 'نباتي'],
    rating: 4.6,
    reviews: 124,
    ingredients: ['فول', 'ثوم', 'كمون', 'ليمون', 'زيت زيتون', 'ملح', 'فلفل', 'طماطم'],
    prepTime: 30,
    servings: 2,
    calories: 380,
    allergens: [],
    relatedMeals: ['m1', 'm3']
  },
];

// Sample data for vendors
const vendors = [
  {
    id: 'v1',
    name: 'أم أحمد',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3',
    specialty: 'المأكولات المصرية الشعبية',
    rating: 4.8,
    totalMeals: 28,
    description: 'طباخة مصرية ماهرة بخبرة 25 عاماً في تحضير أشهى الأكلات المصرية الشعبية بوصفات عائلية أصيلة',
    location: 'القاهرة، وسط البلد',
  },
  {
    id: 'v2',
    name: 'الحاج محمود',
    image: 'https://images.unsplash.com/photo-1512485694207-bde7c9c13261?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3',
    specialty: 'المشويات والأكلات الريفية',
    rating: 4.9,
    totalMeals: 22,
    description: 'خبرة 30 عاما في تحضير أشهى اللحوم المشوية والأكلات الريفية المصرية الأصيلة على الطريقة التقليدية',
    location: 'القاهرة، المعادي',
  },
  {
    id: 'v3',
    name: 'الشيف سامي',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.0.3',
    specialty: 'المأكولات المصرية الفاخرة',
    rating: 4.7,
    totalMeals: 35,
    description: 'شيف محترف درس فنون الطهي المصري الأصيل، متخصص في إعداد الأطباق المصرية الفاخرة والتقليدية بلمسة عصرية',
    location: 'القاهرة، الزمالك',
  },
];

const MealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Force scroll to top whenever the component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find the meal with the matching ID
  const meal = meals.find(meal => meal.id === id);
  
  // Find chef information
  const chef = meal ? vendors.find(vendor => vendor.id === meal.chefId) : null;
  
  // Find related meals
  const relatedMeals = meal ? 
    meals.filter(m => meal.relatedMeals.includes(m.id)) : [];

  // Fallback image if the original fails to load
  const fallbackImage = "/placeholder.svg";

  // Handle quantity change
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Handle add to cart
  const handleAddToCart = () => {
    if (meal) {
      toast({
        title: "تمت الإضافة إلى السلة",
        description: `تمت إضافة ${meal.arabicName} (${quantity}) إلى سلة التسوق`,
      });
    }
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share && meal) {
      navigator.share({
        title: `${meal.arabicName} - مائدة مصرية`,
        text: meal.description,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط الوجبة إلى الحافظة",
      });
    }
  };

  if (!meal) {
    return (
      <div className="min-h-screen bg-sand-50" dir="rtl">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 font-arabic">عفواً، لم يتم العثور على الوجبة</h2>
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 text-terracotta-600 hover:text-terracotta-700 transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="font-arabic">العودة إلى الصفحة الرئيسية</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm font-arabic">
          <Link to="/" className="text-sand-600 hover:text-terracotta-500 transition-colors">الرئيسية</Link>
          <span className="mx-2 text-sand-400">/</span>
          <Link to="/#الوجبات" className="text-sand-600 hover:text-terracotta-500 transition-colors">الوجبات</Link>
          <span className="mx-2 text-sand-400">/</span>
          <span className="text-sand-900">{meal.arabicName}</span>
        </div>
        
        {/* Meal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Meal Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={imageError ? fallbackImage : meal.image}
              alt={meal.name}
              className="w-full h-full object-cover rounded-xl"
              style={{ maxHeight: '500px' }}
              onError={() => setImageError(true)}
              loading="lazy"
            />
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
            >
              <Heart
                className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  isLiked ? "fill-terracotta-500 text-terracotta-500" : "text-sand-900"
                )}
              />
            </button>
            <button
              onClick={handleShare}
              className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
            >
              <Share2 className="w-5 h-5 text-sand-900" />
            </button>
          </div>
          
          {/* Meal Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              {meal.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block px-3 py-1 text-sm rounded-full bg-sand-200 text-sand-900 font-arabic"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-arabic">{meal.arabicName}</h1>
            <p className="text-lg text-sand-700 mb-1">{meal.name}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-saffron-500 text-saffron-500 mr-1" />
                <span className="font-medium">{meal.rating}</span>
              </div>
              <span className="mx-2 text-sand-400">•</span>
              <span className="text-sand-600">{meal.reviews} تقييم</span>
              <span className="mx-2 text-sand-400">•</span>
              <Link 
                to={`/chef/${meal.chefId}`} 
                className="text-terracotta-600 hover:text-terracotta-700 transition-colors font-arabic"
              >
                {meal.chef}
              </Link>
            </div>
            
            <p className="text-sand-800 mb-6 font-arabic leading-relaxed">
              {meal.longDescription}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center justify-center p-3 bg-sand-100 rounded-lg">
                <Clock className="w-5 h-5 text-olive-600 mb-1" />
                <span className="text-sm text-sand-900 font-arabic">{meal.prepTime} دقيقة</span>
                <span className="text-xs text-sand-600 font-arabic">وقت التحضير</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-sand-100 rounded-lg">
                <Users className="w-5 h-5 text-olive-600 mb-1" />
                <span className="text-sm text-sand-900 font-arabic">{meal.servings} أشخاص</span>
                <span className="text-xs text-sand-600 font-arabic">عدد الأفراد</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-sand-100 rounded-lg">
                <UtensilsCrossed className="w-5 h-5 text-olive-600 mb-1" />
                <span className="text-sm text-sand-900 font-arabic">{meal.calories} سعرة</span>
                <span className="text-xs text-sand-600 font-arabic">السعرات الحرارية</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-2xl font-bold text-terracotta-700">{meal.price} ج.م</span>
                <span className="text-sm text-sand-600 mr-2 font-arabic">للوجبة الواحدة</span>
              </div>
              
              <div className="flex items-center border border-sand-200 rounded-lg">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-2 text-sand-700 hover:bg-sand-100 transition-colors rounded-l-lg"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x border-sand-200">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-2 text-sand-700 hover:bg-sand-100 transition-colors rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-full py-3 px-4 rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white font-arabic text-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>أضف إلى السلة</span>
            </button>
          </div>
        </div>
        
        {/* Ingredients Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 font-arabic">المكونات</h2>
          <Separator className="mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meal.ingredients.map((ingredient, idx) => (
              <div 
                key={idx} 
                className="flex items-center p-3 rounded-lg bg-white shadow-sm"
              >
                <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                <span className="font-arabic">{ingredient}</span>
              </div>
            ))}
          </div>
          
          {meal.allergens.length > 0 && (
            <div className="mt-6 p-4 bg-sand-100 rounded-lg">
              <h3 className="font-bold mb-2 font-arabic text-sand-900">تنبيه الحساسية</h3>
              <p className="text-sand-700 font-arabic">
                يحتوي هذا الطبق على: {meal.allergens.join('، ')}
              </p>
            </div>
          )}
        </div>
        
        {/* Chef Card */}
        {chef && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 font-arabic">الطباخ</h2>
            <Separator className="mb-6" />
            
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 h-40 md:h-auto relative">
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
                  
                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                      <ChefHat className="w-3 h-3 text-terracotta-500" />
                      <span className="text-xs font-medium text-sand-900 font-arabic">{chef.specialty}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 md:p-6 md:w-3/4">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-arabic">{chef.name}</CardTitle>
                        <CardDescription className="font-arabic">{chef.location}</CardDescription>
                      </div>
                      <div className="flex items-center bg-saffron-100 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 text-saffron-500 mr-1" />
                        <span className="text-sm font-medium text-sand-900">{chef.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-sand-700 font-arabic mb-4">{chef.description}</p>
                    <p className="text-sm text-sand-600 font-arabic">{chef.totalMeals} وجبة متاحة</p>
                  </CardContent>
                  
                  <CardFooter className="p-0 pt-4">
                    <Link 
                      to={`/chef/${chef.id}`}
                      className="w-full md:w-auto py-2 px-4 rounded-lg border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-50 font-arabic text-sm transition-colors duration-300 text-center"
                    >
                      عرض جميع الوجبات
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {/* Related Meals Section */}
        {relatedMeals.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 font-arabic">وجبات ذات صلة</h2>
            <Separator className="mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMeals.map((relatedMeal) => (
                <Link 
                  key={relatedMeal.id}
                  to={`/meal/${relatedMeal.id}`}
                  className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={relatedMeal.image}
                      alt={relatedMeal.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-50"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-sand-900 font-arabic">{relatedMeal.arabicName}</h3>
                    <p className="text-sm text-sand-700">{relatedMeal.name}</p>
                    <p className="text-sand-600 text-sm font-arabic mt-2 line-clamp-2">{relatedMeal.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-bold text-terracotta-700">{relatedMeal.price} ج.م</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-saffron-500 text-saffron-500 mr-1" />
                        <span className="text-sm">{relatedMeal.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MealDetail;
