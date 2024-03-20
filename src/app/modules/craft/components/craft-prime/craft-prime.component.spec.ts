import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftPrimeComponent } from './craft-prime.component';

describe('CraftPrimeComponent', () => {
  let component: CraftPrimeComponent;
  let fixture: ComponentFixture<CraftPrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftPrimeComponent]
    });
    fixture = TestBed.createComponent(CraftPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
