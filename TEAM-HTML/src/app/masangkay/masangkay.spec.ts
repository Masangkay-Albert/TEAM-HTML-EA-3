import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masangkay } from './masangkay';

describe('Masangkay', () => {
  let component: Masangkay;
  let fixture: ComponentFixture<Masangkay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masangkay],
    }).compileComponents();

    fixture = TestBed.createComponent(Masangkay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
