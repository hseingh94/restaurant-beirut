import { TestBed } from '@angular/core/testing';

import { MenuDataService } from './menu-data'; // 1. IMPORT the correct service

describe('MenuDataService', () => { // 2. Rename describe block
  let service: MenuDataService; // 3. Use the correct type

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDataService); // 4. INJECT the correct service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // I recommend adding actual tests for the service methods:

  it('should return 6 menu items', () => {
    expect(service.getMenu().length).toBe(6);
  });
  
  it('should return items filtered by category "دجاج"', () => {
    const filteredItems = service.getMenu('دجاج');
    expect(filteredItems.length).toBe(2);
    expect(filteredItems[0].name_ar).toBe('الشاورما لحم');
  });
});