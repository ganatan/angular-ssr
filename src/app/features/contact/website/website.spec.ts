import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Website } from './website';

describe('Website', () => {
  let component: Website;
  let fixture: ComponentFixture<Website>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Website],
    }).compileComponents();

    fixture = TestBed.createComponent(Website);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
