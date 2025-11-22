import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProductsPage } from './private-products-page';

describe('PrivateProductsPage', () => {
  let component: PrivateProductsPage;
  let fixture: ComponentFixture<PrivateProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateProductsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
