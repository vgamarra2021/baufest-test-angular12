import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterDto } from '../model/character/character.dto';
import { EpisodeDto } from '../model/episode/episode.dto';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  modal$ = new Subject<{ characters: CharacterDto[]; episode: EpisodeDto }>();
}
