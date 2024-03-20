import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNewComponent } from './inventory-new.component';

describe('InventoryNewComponent', () => {
  let component: InventoryNewComponent;
  let fixture: ComponentFixture<InventoryNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryNewComponent]
    });
    fixture = TestBed.createComponent(InventoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
