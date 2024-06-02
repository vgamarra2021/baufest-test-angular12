import { Component, Input, OnInit } from '@angular/core';

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
export class EpisodeCard implements OnInit {
  @Input() name: string = '';
  @Input() emisionDate: string = '';
  @Input() code: string = '';

  constructor() {}

  ngOnInit(): void {}
}
