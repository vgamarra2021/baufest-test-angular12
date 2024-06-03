import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.html',
  styles: [],
})
export class CharacterCard implements OnInit {
  @Input() name: string = '';
  @Input() gender: string = '';
  @Input() location: string = '';
  @Input() image: string = '';
  @Input() episodes: string[] = [];
  @Input() selectedEpisode: string = '';

  ngOnInit(): void {
    this.selectedEpisode = this.getRandomEpisode();
  }

  getRandomEpisode() {
    const randomIndex = Math.floor(Math.random() * this.episodes.length);
    return this.episodes[randomIndex];
  }

  getIdFromUrl(url: string): string | null {
    const regex = /\/(\d+)(?:\/)?$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
