import { Component, Input } from '@angular/core';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.html',
  styles: [
    `
      :host {
        min-width: 300px;
      }
    `,
  ],
})
export class EpisodeCard {
  @Input() episode!: EpisodeDto;
}
