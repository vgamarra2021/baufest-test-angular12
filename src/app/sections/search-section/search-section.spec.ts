import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSection } from './search-section';

describe('SearchSection', () => {
  let component: SearchSection;
  let fixture: ComponentFixture<SearchSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
