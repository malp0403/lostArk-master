import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftHomeComponent } from './craft-home.component';

describe('CraftHomeComponent', () => {
  let component: CraftHomeComponent;
  let fixture: ComponentFixture<CraftHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftHomeComponent]
    });
    fixture = TestBed.createComponent(CraftHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
