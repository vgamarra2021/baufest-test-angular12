import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDto } from '../model/character/character.dto';
import { apiConfig } from '../config/api.config';
import { map, tap } from 'rxjs/operators';
import { CharacterResponseDto } from '../model/character/character-response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersSubject = new BehaviorSubject<CharacterDto[]>([]);
  characters$ = this.charactersSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchCharacters() {
    return this.http.get<CharacterResponseDto>(apiConfig.charactersUrl).pipe(
      tap((response) => {
        console.log(`Fetch All Characters!`);
        this.charactersSubject.next(response.results);
      }),
      map((character) => {
        return character.results;
      })
    );
  }

  getCharacters() {
    return this.charactersSubject.value;
  }
}
