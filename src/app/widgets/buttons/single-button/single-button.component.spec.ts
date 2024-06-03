import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButton } from './single-button.component';

describe('SingleButton', () => {
  let component: SingleButton;
  let fixture: ComponentFixture<SingleButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
