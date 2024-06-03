import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareButton } from './compare-button';

describe('CompareButton', () => {
  let component: CompareButton;
  let fixture: ComponentFixture<CompareButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
