import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonModal } from './comparison-modal';

describe('ComparisonModal', () => {
  let component: ComparisonModal;
  let fixture: ComponentFixture<ComparisonModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
