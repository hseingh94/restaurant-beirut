// src/app/core/header/header.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  // These imports are used in the HTML template:
  imports: [RouterLink, RouterLinkActive, NgIf], 
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMenu() { 
    this.isMenuOpen = !this.isMenuOpen; 
  }
}