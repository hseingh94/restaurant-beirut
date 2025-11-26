// src/app/core/footer/footer.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  // This import is used in the HTML template:
  imports: [RouterLink], 
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {}