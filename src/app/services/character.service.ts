import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '../config/api.config';
import { CharacterDto } from '../model/character/character.dto';
import { BaseClient } from './base-client';

@Injectable({
  providedIn: 'root',
})
export class CharacterService extends BaseClient {
  baseUrl: string = apiConfig.charactersUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getRandomEpisode(character: CharacterDto) {
    const randomIndex = Math.floor(Math.random() * character.episode.length);
    return character.episode[randomIndex];
  }
}
