import { Injectable } from '@angular/core';
import { CharacterService } from './character.service';
import { EpisodeService } from './episode.service';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService
  ) {}

  searchTextValue: string = '';

  onChangeSearchText(searchValue: string, route: string) {
    console.log(`Search Value: ${searchValue}`)
    this.searchTextValue = searchValue
    switch (route) {
      case '/characters':
        this.characterService.onChangeSearchValue(searchValue);
        break;
      case '/episodes':
        this.episodeService.onChangeSearchValue(searchValue);
        break;
      case '/locations':
        this.locationService.onChangeSearchValue(searchValue);
        break;
      default:
        break;
    }
  }
}
