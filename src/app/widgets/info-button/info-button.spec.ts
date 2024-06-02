import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButton } from './info-button';

describe('InfoButton', () => {
  let component: InfoButton;
  let fixture: ComponentFixture<InfoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
