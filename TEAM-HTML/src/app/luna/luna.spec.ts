import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luna } from './luna';

describe('Luna', () => {
  let component: Luna;
  let fixture: ComponentFixture<Luna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Luna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Luna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
