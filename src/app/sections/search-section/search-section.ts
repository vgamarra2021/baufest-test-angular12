import { Component } from '@angular/core';
@Component({
  selector: 'app-search-section',
  template: `
    <section
      class="flex flex-col w-full max-w-4xl mx-auto items-center justify-center p-6 gap-6"
    >
      <img src="assets/imgs/Rick_and_Morty.png" alt="RickAndMorty Logo" />
      <app-search-bar class="w-full mt-6"></app-search-bar>
      <app-nav-section></app-nav-section>
    </section>
  `,
})
export class SearchSection {}
