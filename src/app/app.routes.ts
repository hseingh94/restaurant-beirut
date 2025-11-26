// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { MenuComponent } from './features/menu/menu';
import { ContactComponent } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'مطعم بيروت - الصفحة الرئيسية' },
  { path: 'menu', component: MenuComponent, title: 'مطعم بيروت - القائمة' },
  { path: 'contact', component: ContactComponent, title: 'مطعم بيروت - اتصل بنا' },
  { path: '**', redirectTo: '' } // Wildcard route
];