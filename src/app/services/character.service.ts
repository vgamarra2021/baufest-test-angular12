import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { BaseClient } from './base-client';
import { map, tap } from 'rxjs/operators';
import { ResponseDto } from '../model/common/response.dto';
import { CharacterDto } from '../model/character/character.dto';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService extends BaseClient {
  baseUrl: string = apiConfig.charactersUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getItemsByPageWithEpisodie(page: number) {
    return this.getItemsByPage(page).pipe(
      map((response: ResponseDto): ResponseDto => {
        response.results = response.results.map((character: any) => {
          return {
            ...character,
            episodeName: this.getRandomEpisode(character),
          };
        });
        return response;
      }),
      tap((res) => console.log(res))
    );
  }

  getRandomEpisode(character: CharacterDto) {
    const randomIndex = Math.floor(Math.random() * character.episode.length);
    return character.episode[randomIndex];
  }
}
