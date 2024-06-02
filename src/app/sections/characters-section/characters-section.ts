import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CharacterResponseDto } from 'src/app/model/character/character-response.dto';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-section',
  template: `
    <section
      class="flex flex-row flex-wrap justify-center gap-6 w-full max-w-full px-6"
    >
      <hr class="border-gray-100 opacity-50 w-full" />
      <p class="text-base text-center w-full text-gray-200 font-normal">
        {{ characters[characters.length -1]?.id }} / {{ total }} Resultados (Página 1)
      </p>
      <app-character-card
        *ngFor="let character of characters"
        [name]="character.name"
        [image]="character.image"
        [gender]="character.gender"
        [location]="character.location.name"
        [episodes]="character.episode"
      ></app-character-card>
    </section>
  `,
  styles: [],
})
export class CharactersSection implements OnInit {
  constructor(private service: CharacterService) {}

  characters: CharacterDto[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.service
      .getCharactersByPage()
      .pipe(
        tap((res: CharacterResponseDto) => {
          this.total = res.info.count
          this.characters = res.results;
        })
      )
      .subscribe();
  }
}
