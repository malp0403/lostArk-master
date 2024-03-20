import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTestComponent } from './inventory-test.component';

describe('InventoryTestComponent', () => {
  let component: InventoryTestComponent;
  let fixture: ComponentFixture<InventoryTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryTestComponent]
    });
    fixture = TestBed.createComponent(InventoryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
