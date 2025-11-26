// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import the standalone components
import { HeaderComponent } from './core/header/header';
import { FooterComponent } from './core/footer/footer';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  // Declare the imported components
  imports: [CommonModule,RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'مطعم بيروت';
}