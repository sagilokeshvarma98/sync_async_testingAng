import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ProductsService;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    service = TestBed.inject(ProductsService);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test filtered product list', () => {
    component.searchtext === 'fri';
    spyOn(service, 'filterProducts').and.callThrough();
    component.filterProducts();
    fixture.detectChanges();
    let value = debug.query(By.css("#Product_0")).nativeElement.innerText;
    console.log(value);
    expect(value).toContain(component.searchtext);
  });

});
