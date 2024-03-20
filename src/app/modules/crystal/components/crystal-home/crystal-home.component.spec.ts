import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalHomeComponent } from './crystal-home.component';

describe('CrystalHomeComponent', () => {
  let component: CrystalHomeComponent;
  let fixture: ComponentFixture<CrystalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrystalHomeComponent]
    });
    fixture = TestBed.createComponent(CrystalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
