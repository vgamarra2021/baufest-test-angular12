import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesSection } from './episodes-section';

describe('EpisodesSection', () => {
  let component: EpisodesSection;
  let fixture: ComponentFixture<EpisodesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
