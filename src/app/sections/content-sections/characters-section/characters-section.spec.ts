import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSection } from './characters-section';

describe('CharactersSection', () => {
  let component: CharactersSection;
  let fixture: ComponentFixture<CharactersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
