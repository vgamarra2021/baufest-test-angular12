import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { apiConfig } from '../config/api.config';
import { CharacterDto } from '../model/character/character.dto';
import { ResponseDto } from '../model/common/response.dto';
import { EpisodeDto } from '../model/episode/episode.dto';
import { LocationDto } from '../model/location/location.dto';
import { UrlUtil } from '../utils/url-util';
import { BaseClient } from './base-client';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService extends BaseClient {
  baseUrl: string = apiConfig.charactersUrl;

  constructor(
    protected http: HttpClient,
    private episodeService: EpisodeService
  ) {
    super(http);
  }

  getCharactersWithEpisodies(name: string, page: number) {
    return this.getItemsByNameAndPage(name, page).pipe(
      switchMap((response) => {
        response.results = (response.results as CharacterDto[]).map(
          (character) => {
            character.episodeId = this.getRandomEpisodeId(character);
            return character;
          }
        );

        const episodesId = (response.results as CharacterDto[]).map(
          (character) => character.episodeId!
        );

        const episodes$ =
          this.episodeService.getMultiplesItemsByIds<EpisodeDto[]>(episodesId);

        return forkJoin({
          episodes: episodes$,
          response: of(response),
        });
      }),
      map(({ episodes, response }) => {
        response.results = (response.results as CharacterDto[]).map(
          (character) => {
            character.episodeName = episodes.find(
              (episode) => episode.id === character.episodeId!
            )?.name;
            return character;
          }
        );
        return response;
      })
    );
  }

  getRandomEpisodeId(character: CharacterDto): number {
    const randomIndex = Math.floor(Math.random() * character.episode.length);
    const episodeUrl = character.episode[randomIndex];
    return Number(UrlUtil.getIdFromUrl(episodeUrl));
  }
}
