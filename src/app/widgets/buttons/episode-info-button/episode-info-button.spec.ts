import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeInfoButton } from './episode-info-button';

describe('EpisodeInfoButton', () => {
  let component: EpisodeInfoButton;
  let fixture: ComponentFixture<EpisodeInfoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeInfoButton],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeInfoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
