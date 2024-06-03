import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { CharacterService } from 'src/app/services/character.service';
import { CompareCharactersService } from 'src/app/services/compare-characters.service';
import { SearchService } from 'src/app/services/search.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.html',
  styles: [],
})
export class CharactersSection extends BaseComponent implements OnInit {
  constructor(
    private service: CharacterService,
    private searchService: SearchService,
    private compareCharactersService: CompareCharactersService
  ) {
    super();
  }

  characters: CharacterDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  compareCharactersVisible: boolean = false;

  ngOnInit(): void {
    this.updateCards();
    this.service.subject$
      .pipe(
        tap(() => {
          this.updateCards();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.compareCharactersService.compareList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((characters) => {
        characters.length === 0
          ? (this.compareCharactersVisible = false)
          : (this.compareCharactersVisible = true);
      });
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
