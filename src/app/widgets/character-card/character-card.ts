import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.html',
  styles: [],
})
export class CharacterCard {
  @Input() name: string = '';
  @Input() gender: string = '';
  @Input() location: string = '';
  @Input() image: string = '';
  @Input() episodes: string[] = [];

  getRandomItem(list: string[]) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
}
