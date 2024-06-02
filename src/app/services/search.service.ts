import { Injectable } from '@angular/core';
import { CharacterService } from './character.service';
import { LocationService } from './location.service';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService
  ) {}
}
