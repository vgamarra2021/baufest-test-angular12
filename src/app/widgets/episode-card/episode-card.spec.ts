import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCard } from './episode-card';

describe('EpisodeCard', () => {
  let component: EpisodeCard;
  let fixture: ComponentFixture<EpisodeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeCard ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
