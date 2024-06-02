import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSection } from './locations-section';

describe('LocationsSection', () => {
  let component: LocationsSection;
  let fixture: ComponentFixture<LocationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
