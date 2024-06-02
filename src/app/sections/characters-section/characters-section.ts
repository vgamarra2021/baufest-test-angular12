import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CharacterResponseDto } from 'src/app/model/character/character-response.dto';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-section',
  template: `
    <section
      class="flex flex-col flex-wrap justify-center items-center gap-6 w-full max-w-full px-6"
    >
      <hr class="border-gray-100 opacity-50 w-full" />
      <p class="text-base text-center w-full text-gray-200 font-normal">
        {{ '1-20' }} / {{ total }} - (Página {{ page }})
      </p>
      <div
        class="flex flex-row flex-wrap justify-center gap-6 w-full max-w-full px-6"
      >
        <app-character-card
          *ngFor="let character of characters"
          [name]="character.name"
          [image]="character.image"
          [gender]="character.gender"
          [location]="character.location.name"
          [episodes]="character.episode"
        ></app-character-card>
      </div>

      <ngb-pagination
        [(page)]="page"
        [pageSize]="pageSize"
        [collectionSize]="total"
        [maxSize]="5"
        size="lg"
        (pageChange)="onPageChange($event)"
      ></ngb-pagination>
    </section>
  `,
  styles: [
    `
      .pagination {
        color: '#000' !important;
        background: #000;
      }
    `,
  ],
})
export class CharactersSection implements OnInit {
  constructor(private service: CharacterService) {}

  characters: CharacterDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  private pageSubject = new BehaviorSubject<number>(this.page);

  ngOnInit(): void {
    this.pageSubject
      .pipe(
        switchMap((page) => this.service.getCharactersByPage(page)),
        tap((res: CharacterResponseDto) => {
          console.log('call')
          this.total = res.info.count;
          this.characters = res.results;
        })
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
