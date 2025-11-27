// src/app/models/menu-item.model.ts
export interface MenuItem {
  id: number;
  name_ar: string;
  name_en: string;
  description_ar?: string;
  description_en?: string;
  price: any;
  category: 'برجر'| 'عرض خاص'|'مقبلات' | 'دجاج' |'ساندويش' |'وجبات' | 'ريزو' | 'مرطبات';
  imageUrl: string;
}