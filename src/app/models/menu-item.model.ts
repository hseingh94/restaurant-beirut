export interface MenuOption {
  label_ar: string;
  label_en: string;
  price: number;
}

export interface MenuItem {
  id: number;
  name_ar: string;
  name_en: string;
  description_ar?: string;
  description_en?: string;
  price: any; 
  category: 'برجر'|'مقبلات' | 'دجاج' |'ساندويش' |'وجبات' | 'ريزو' | 'مرطبات';
  imageUrl: string;
  options?: MenuOption[]; // Add this optional line
}