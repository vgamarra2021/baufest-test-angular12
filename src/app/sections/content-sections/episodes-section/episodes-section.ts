import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { EpisodeService } from 'src/app/services/episode.service';
import { SearchService } from 'src/app/services/search.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-episodes-section',
  templateUrl: './episodes-section.html',
  styles: [],
})
export class EpisodesSection extends BaseComponent implements OnInit {
  constructor(
    private service: EpisodeService,
    private searchService: SearchService
  ) {
    super();
  }

  episodes: EpisodeDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;

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
  }

  onPageChange(): void {
    this.updateCards();
  }

  updateCards() {
    const searchValue = this.searchService.searchTextValue;
    this.service
      .getItemsByNameAndPage(searchValue, this.page)
      .pipe(
        catchError(() => {
          this.total = 0;
          this.episodes = [];
          return EMPTY;
        }),
        tap((res: ResponseDto | undefined) => {
          this.total = res?.info.count || 0;
          this.episodes = (res?.results as EpisodeDto[]) || [];
        })
      )
      .subscribe();
  }
}
