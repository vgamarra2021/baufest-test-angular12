import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episodes-section',
  templateUrl: './episodes-section.html',
  styles: [],
})
export class EpisodesSection implements OnInit, OnDestroy {
  constructor(private service: EpisodeService) {}

  episodes: EpisodeDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;

  private pageSubject = new BehaviorSubject<number>(this.page);
  private readonly destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.pageSubject
      .pipe(
        switchMap((page) => this.service.getItemsByPage(page)),
        tap((res: ResponseDto) => {
          this.total = res.info.count;
          this.episodes = res.results as EpisodeDto[];
        })
      )
      .subscribe();

    this.service.subject
      .pipe(
        switchMap((searchValue) =>
          this.service.getItemsByName(searchValue).pipe(
            catchError((error: HttpErrorResponse) => {
              console.log(`${error.message}`);
              this.total = 0;
              this.episodes = [];
              return EMPTY;
            })
          )
        ),
        tap((res: ResponseDto) => {
          this.total = res.info.count;
          this.episodes = res.results as EpisodeDto[];
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
