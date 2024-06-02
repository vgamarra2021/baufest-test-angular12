import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCard } from './character-card';

describe('CharacterCard', () => {
  let component: CharacterCard;
  let fixture: ComponentFixture<CharacterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
