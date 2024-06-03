import { Component, Input, OnInit } from '@angular/core';

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
  @Input() name: string = '';
  @Input() gender: string = '';
  @Input() location: string = '';
  @Input() image: string = '';
  @Input() episodes: string[] = [];
  @Input() selectedEpisode: string = '';
}
