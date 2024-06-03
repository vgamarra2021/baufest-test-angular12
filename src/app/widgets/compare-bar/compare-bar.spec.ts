import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBar } from './compare-bar';

describe('CompareBar', () => {
  let component: CompareBar;
  let fixture: ComponentFixture<CompareBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareBar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
