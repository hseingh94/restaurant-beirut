// src/app/services/menu-data.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model'; // Assuming model is already defined

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  private menuItems: MenuItem[] = [
{ 
  id: 1, 
  name_ar: 'جاجيك', 
  name_en: 'Jajik', 
  description_ar: 'طبق لبن مع خيار وثوم، يقدم بارداً ومنعشاً.', 
  description_en: 'Cold yogurt dish with cucumber and garlic.', 
  price: 3.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/jajik.jpg' 
},

{ 
  id: 10, 
  name_ar: 'متبل', 
  name_en: 'Moutabal', 
  description_ar: 'باذنجان مشوي مهروس مع طحينة وثوم.', 
  description_en: 'Roasted eggplant dip blended with tahini and garlic.', 
  price: 3.500, 
  category: 'مقبلات', 
  imageUrl: 'assets/moutabal.jpg' 
},

{ 
  id: 11, 
  name_ar: 'حمص', 
  name_en: 'Hommos', 
  description_ar: 'حمص مهروس مع طحينة وزيت زيتون.', 
  description_en: 'Mashed chickpeas with tahini and olive oil.', 
  price: 4.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/hommos.jpg' 
},
{ 
  id: 15, 
  name_ar: 'تبولة', 
  name_en: 'tabbouleh', 
  description_ar: 'تبولة لبنانية طازجة', 
  description_en: 'Fresh Lebanese Tabbouleh', 
  price: 5.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/tabbouleh.jpg' 
},
{ 
  id: 16, 
  name_ar: 'فتوش', 
  name_en: 'fattoush', 
  description_ar: ' فتوش لبناني مع خبز عربي محمّص', 
  description_en: 'Fresh Lebanese Fattoush with Toasted Arabic Bread.', 
  price: 5.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/fattoush.jpg' 
},

{ 
  id: 12, 
  name_ar: 'طبق مقبلات', 
  name_en: 'Appetizer Plate', 
  description_ar: 'مجموعة مختارة من المقبلات الشرقية.', 
  description_en: 'A selection of assorted Middle Eastern appetizers.', 
  price: 5.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/moukabilat.jpg' 
},

{ 
  id: 13, 
  name_ar: ' فنكر صغير', 
  name_en: 'Finker', 
  description_ar: 'فنكر مقرمشة تقدم مع صوص جانبي.', 
  description_en: 'Crunchy potato served with a side dip.', 
  price: 2.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/potato1.webp' 
},
{
   id: 14, 
  name_ar: ' فنكر كبير', 
  name_en: 'Finker', 
  description_ar: 'فنكر مقرمشة تقدم مع صوص جانبي.', 
  description_en: 'Crunchy potato served with a side dip.', 
  price: 5.000, 
  category: 'مقبلات', 
  imageUrl: 'assets/potato.jpg'  
},
{ 
  id: 15, 
  name_ar: 'صوص بيروت', 
  name_en: 'Beirut Sauce', 
  description_ar: 'صوص بيروت الخاص بالنكهة الأصلية.', 
  description_en: 'Special Beirut sauce with authentic flavor.', 
  price: 0.500, 
  category: 'مقبلات', 
  imageUrl: 'assets/sous.jpg' 
},

{ 
  id: 16, 
  name_ar: 'رز صحن', 
  name_en: 'Rice Plate', 
  description_ar: 'أرز  مطهو على البخار يقدم كطبق جانبي.', 
  description_en: 'Steamed white rice served as a side dish.', 
  price: 1.500, 
  category: 'مقبلات', 
  imageUrl: 'assets/rez.jpg' 
},

{ 
  id: 21, 
  name_ar: 'دجاجة كاملة', 
  name_en: 'Whole Chicken', 
  description_ar: 'دجاجة كاملة مشوية على الفحم مع الصلصات.', 
  description_en: 'Whole chicken grilled over charcoal with sauces.', 
  price: 18.000, 
  category: 'دجاج', 
  imageUrl: 'assets/faroouj.jpg' },
{ 
  id: 2, 
  name_ar: 'نص دجاجة مشوية', 
  name_en: 'Half Grilled Chicken', 
  description_ar: 'نصف دجاجة مشوية تقدم مع الصلصات الجانبية.', 
  description_en: 'Half grilled chicken served with side sauces.', 
  price: 10.000, 
  category: 'دجاج', 
  imageUrl: 'assets/nos farouj.jpg' 
},

{ 
  id: 20, 
  name_ar: 'نص دجاجة صدر', 
  name_en: 'Half Chicken Breast', 
  description_ar: 'صدر دجاج مشوي يقدم مع صلصة لذيذة.', 
  description_en: 'Grilled chicken breast served with delicious sauce.', 
  price: 12.000, 
  category: 'دجاج', 
  imageUrl: 'assets/sader.jpg' 
},


  { 
  id: 24, 
  name_ar: ' وجبة أجنحة ', 
  name_en: 'Wings meal', 
  description_ar: 'أجنحة دجاج متبلة بتوابل خاصة ومشوية على الفحم.', 
  description_en: 'Chicken wings marinated with special spices and grilled over charcoal', 
  price: 7.000, 
  category: 'دجاج', 
  imageUrl: 'assets/jwenih.jpg' 
},
  { 
  id: 25, 
  name_ar: 'وجبة أفخاد   ', 
  name_en: ' Chicken Thighs Meal', 
  description_ar: 'أفخاد دجاج متبلة بتوابل خاصة ومشوية على الفحم .', 
  description_en: 'Chicken thighs marinated with special spices and grilled over charcoal.', 
  price: 9.500, 
  category: 'دجاج', 
  imageUrl: 'assets/fkhad.jpg' 
},
{ 
  id: 22, 
  name_ar: 'كرسبي', 
  name_en: 'Crispy', 
  description_ar: 'وجبة كرسبي قطع مقدمة مع فينكر وصوص', 
  description_en: 'Crispy pieces served with fries and sauce', 
  price: null, // Set to null because we are using options
  category: 'دجاج', 
  imageUrl: 'assets/crespy.jpg',
  options: [
    { label_ar: '3 قطع', label_en: '3 Pieces', price: 5.000 },
    { label_ar: '5 قطع', label_en: '5 Pieces', price: 6.500 },
    { label_ar: '12 قطعة', label_en: '12 Pieces', price: 13.000 }
  ]
},
{ 
  id: 3, 
  name_ar: 'ساندويش خبز لبناني كبير',
  name_en: ' Large Lebanese Bread Sandwich', 
  description_ar: ' ساندويش كبير .', 
  description_en: 'Half large sandwich with various fillings.', 
  price: 6.500, 
  category: 'ساندويش', 
  imageUrl: 'assets/sandwishaghir.jpg' 
},

{ 
  id: 31, 
  name_ar: 'ساندويش خبز لبناني صغير', 
  name_en: 'Small Lebanese Bread Sandwich', 
  description_ar: 'ساندويش صغير مثالي للوجبات الخفيفة.', 
  description_en: 'Small sandwich, perfect for a light meal.', 
  price: 4.000, 
  category: 'ساندويش', 
  imageUrl: 'assets/sandwish.jpg' 
},

{ 
  id: 22, 
  name_ar: 'ساندويش الخبز دايت أسمر', 
  name_en: 'Diet Whole Wheat Bread Sandwich', 
  description_ar: 'ساندويش صحي بالخبز الأسمر.', 
  description_en: 'Healthy sandwich made with whole wheat bread.', 
  price: 4.000, 
  category: 'ساندويش', 
  imageUrl: 'assets/diet.webp' 
},{ 
  id: 23, 
  name_ar: 'تويستر بس عالفحم ', 
  name_en: 'twister', 
  description_ar: 'نكهة الفحم قلبت مفهوم التويستر بالكامل .', 
  description_en: 'Healthy sandwich made with whole wheat bread.', 
  price: 5.000, 
  category: 'ساندويش', 
  imageUrl: 'assets/twister.jpg' 
},

{ 
  id: 32, 
  name_ar: 'ساندويش خبز كبير مقطع', 
  name_en: 'Large Cut Sandwich', 
  description_ar: 'سندويش خبز لبناني كبير مقطع مقدم مع فينكر وصوص .', 
  description_en: 'Large sandwich cut into pieces, ideal for sharing.', 
  price: 9.00, 
  category: 'ساندويش', 
  imageUrl: 'assets/moukata3.jpg' 
}, 

{ 
  id: 5, 
  name_ar: 'ريزو دجاج كرسبي', 
  name_en: 'Chicken crespy Rizo', 
  description_ar: 'أرز مع قطع الدجاج وصلصة مميزة.', 
  description_en: 'Rice with chicken pieces and special sauce.', 
  price: 6.500, 
  category: 'ريزو', 
  imageUrl: 'assets/rizo.jpg' 
},

{ 
  id: 50, 
  name_ar: 'ريزو دجاج على الفحم', 
  name_en: 'Grilled Chicken Rizo', 
  description_ar: 'أرز مع قطع الدجاج المشوي على الفحم وصلصة مميزة.', 
  description_en: 'Rice with grilled chicken pieces and special sauce.', 
  price: 6.500, 
  category: 'ريزو', 
  imageUrl: 'assets/rizofa7em.jpg' 
},{
  id: 51, 
  name_ar: '  ميني ريزو دجاج على الفحم', 
  name_en: 'Mini Rizo', 
  description_ar: 'للناس إلي يحبون الوجبات الخفيفة ', 
  description_en: 'Rice with grilled chicken pieces and special sauce.', 
  price: 4.000, 
  category: 'ريزو', 
  imageUrl: 'assets/rizozghir.jpg' 
},
{
  id: 51, 
  name_ar: 'ميني ريزو كرسبي', 
  name_en: 'Mini Rizo', 
  description_ar: 'للناس إلي يحبون الوجبات الخفيفة ', 
  description_en: 'Rice with grilled chicken pieces and special sauce.', 
  price: 4.000, 
  category: 'ريزو', 
  imageUrl: 'assets/rizo.jpg' 
},

{ 
  id: 8, 
  name_ar: 'تشكن فيلة سندويش  ',
  name_en: 'Chicken Fillet Sandwich', 
  description_ar: 'مهذا فيليه بيروت ،كرمشة مثالية،طراوة لذيذة ،وكل شيء فيه فريش ', 
  description_en: 'This Beirut fillet, perfect crunch, delicious tenderness, and everything in it is fresh.', 
  price: 5.000, 
  category: 'برجر', 
  imageUrl: 'assets/fillet.jpg' 
} ,{ 
  id: 80, 
  name_ar: ' باربكيو برجر   ',
  name_en: 'Barbecue Burger', 
  description_ar: 'صدر دجاج , صلصة الباربكيو, جبن  ', 
  description_en: ' Ground chicken breast, whole wheat, bbq sauce, gouda.', 
  price: 6.000, 
  category: 'برجر', 
  imageUrl: 'assets/barbecue.png' 
} ,
{ 
  id: 6, 
  name_ar: 'مرطبات',
  name_en: 'Beverages', 
  description_ar: 'مشروبات باردة ومنعشة.', 
  description_en: 'Cold and refreshing drinks.', 
  price: 0.500, 
  category: 'مرطبات', 
  imageUrl: 'assets/pepsi1.jpg' 
}  
  ];

  getMenu(category?: MenuItem['category']): MenuItem[] {
    if (category) {
      return this.menuItems.filter(item => item.category === category);
    }
    return this.menuItems;
  }

  getCategories(): string[] {
    return [...new Set(this.menuItems.map(item => item.category))];
  }
}