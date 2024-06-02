import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { apiConfig } from '../config/api.config';
import { CharacterResponseDto } from '../model/character/character-response.dto';
import { CharacterDto } from '../model/character/character.dto';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersSubject = new BehaviorSubject<CharacterDto[]>([]);
  characters$ = this.charactersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCharactersByPage(page: number = 1) {
    return this.http
      .get<CharacterResponseDto>(apiConfig.charactersUrl, { params: { page } })
      .pipe(
        tap((response) => {
          console.log(`Fetch All Characters!`);
          console.log(response);
          this.charactersSubject.next(response.results);
        })
      );
  }
}
