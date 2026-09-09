import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saluta } from './saluta';

describe('Saluta', () => {
  let component: Saluta;
  let fixture: ComponentFixture<Saluta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saluta],
    }).compileComponents();

    fixture = TestBed.createComponent(Saluta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
