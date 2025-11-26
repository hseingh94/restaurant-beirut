// src/app/features/menu/menu.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { MenuDataService } from '../../services/menu-data';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe, CurrencyPipe,CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent implements OnInit {
  private menuService = inject(MenuDataService);
  
  menu: MenuItem[] = [];
  filteredMenu: MenuItem[] = [];
  categories: string[] = [];
  selectedCategory: MenuItem['category'] | undefined = undefined;

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    this.filteredMenu = this.menu;
    this.categories = this.menuService.getCategories();
  }

  filterMenu(category?: MenuItem['category']) {
    this.selectedCategory = category;
    this.filteredMenu = this.menuService.getMenu(category);
  }
}