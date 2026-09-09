import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reganit } from './reganit';

describe('Reganit', () => {
  let component: Reganit;
  let fixture: ComponentFixture<Reganit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reganit],
    }).compileComponents();

    fixture = TestBed.createComponent(Reganit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
