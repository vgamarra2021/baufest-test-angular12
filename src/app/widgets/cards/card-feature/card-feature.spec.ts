import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFeature } from './card-feature';

describe('CardFeature', () => {
  let component: CardFeature;
  let fixture: ComponentFixture<CardFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFeature],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
