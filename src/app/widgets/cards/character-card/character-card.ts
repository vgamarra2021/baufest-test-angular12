import { Component, Input } from '@angular/core';
import { CharacterDto } from 'src/app/model/character/character.dto';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.html',
  styles: [
    `
      :host {
        min-width: 300px;
      }
    `,
  ],
})
export class CharacterCard {
  @Input() character!: CharacterDto;
  @Input() selectedEpisode: string = '';
}
