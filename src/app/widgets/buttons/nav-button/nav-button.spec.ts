import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButton } from './nav-button';

describe('NavButton', () => {
  let component: NavButton;
  let fixture: ComponentFixture<NavButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
