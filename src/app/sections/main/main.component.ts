import { Component, OnInit } from '@angular/core';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-main',
  template: `
    <main
      class="flex flex-col w-1/2 mx-auto items-center justify-center p-6 gap-6"
    >
      <img src="assets/imgs/Rick_and_Morty.png" alt="RickAndMorty Logo" />
      <app-search-bar class="w-full mt-6"></app-search-bar>
      <div class="flex flex-row gap-4">
        <app-select-button
          title="Episodios"
          [isActive]="true"
        ></app-select-button>
        <app-select-button
          title="Ubicación"
          [isActive]="false"
        ></app-select-button>
        <app-select-button
          title="Personajes"
          [isActive]="false"
        ></app-select-button>
      </div>
      <hr class="border-gray-100 opacity-50 w-full" />
      <p class="text-sm w-full text-gray-200 text-left font-normal">
        Resultados
      </p>
      <section class="flex flex-row flex-wrap justify-center gap-4 w-full">
        <app-character-card
          *ngFor="let character of characters"
          [title]="character.name"
          [image]="character.image"
          [gender]="character.gender"
          [location]="character.location.name"
        ></app-character-card>
      </section>
    </main>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor(private service: CharacterService) {}
  characters: CharacterDto[] = this.service.getCharacters();
  ngOnInit(): void {
    this.service.characters$.subscribe((characters) => {
      this.characters = characters;
    });
  }
}
