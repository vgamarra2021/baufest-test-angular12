import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-section',
  template: `
    <nav class="flex flex-row gap-2 sm:gap-4">
      <app-nav-button
        *ngFor="let option of options"
        [title]="option.title"
        [value]="option.value"
      ></app-nav-button>
    </nav>
  `,
  styles: [],
})
export class NavSection {
  options = [
    { title: 'Personajes', value: 'characters' },
    { title: 'Episodios', value: 'episodes' },
    { title: 'Ubicación', value: 'locations' },
  ];
}
