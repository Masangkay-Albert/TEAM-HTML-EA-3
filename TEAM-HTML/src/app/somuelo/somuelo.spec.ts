import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somuelo } from './somuelo';

describe('Somuelo', () => {
  let component: Somuelo;
  let fixture: ComponentFixture<Somuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Somuelo],
    }).compileComponents();

    fixture = TestBed.createComponent(Somuelo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
