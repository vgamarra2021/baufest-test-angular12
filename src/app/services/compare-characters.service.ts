import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CharacterDto } from '../model/character/character.dto';

@Injectable({
  providedIn: 'root',
})
export class CompareCharactersService {
  compareList: CharacterDto[] = [];
  compareList$ = new BehaviorSubject(this.compareList);
  modal$ = new Subject<CharacterDto[]>();
  private currentIndex = 0;

  selectCharacter(character: CharacterDto) {
    if (this.characterIsPresent(character!.id)) return;
    if (this.compareList.length < 3) {
      this.compareList.push(character);
    } else {
      this.compareList[this.currentIndex] = character;
      this.currentIndex = (this.currentIndex + 1) % 3;
    }
    this.compareList$.next(this.compareList);
  }

  characterIsPresent(characterId: number) {
    return !!this.compareList.find((item) => item.id === characterId);
  }

  showModal() {
    this.modal$.next(this.compareList);
  }
}
