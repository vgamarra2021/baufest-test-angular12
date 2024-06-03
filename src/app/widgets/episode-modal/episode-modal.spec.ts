import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeModal } from './episode-modal';

describe('EpisodeModal', () => {
  let component: EpisodeModal;
  let fixture: ComponentFixture<EpisodeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
