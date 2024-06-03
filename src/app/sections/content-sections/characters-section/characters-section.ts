import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { CharacterService } from 'src/app/services/character.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.html',
  styles: [],
})
export class CharactersSection implements OnInit, OnDestroy {
  constructor(
    private service: CharacterService,
    private searchService: SearchService
  ) {}

  characters: CharacterDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;

  private readonly destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.updateCards();
    this.service.subject
      .pipe(
        tap((response) => {
          this.updateCards();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onPageChange(): void {
    this.updateCards();
  }

  updateCards() {
    const searchValue = this.searchService.searchTextValue;
    this.service
      .getCharactersWithEpisodies(searchValue, this.page)
      .pipe(
        catchError(() => {
          this.total = 0;
          this.characters = [];
          return EMPTY;
        }),
        tap((res: ResponseDto | undefined) => {
          this.total = res?.info.count || 0;
          this.characters = (res?.results as CharacterDto[]) || [];
        })
      )
      .subscribe();
  }
}
