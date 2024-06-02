import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.html',
  styles: [],
})
export class CharactersSection implements OnInit, OnDestroy {
  constructor(private service: CharacterService) {}

  characters: CharacterDto[] = [];
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
        switchMap((page) => this.service.getItemsByPageWithEpisodie(page)),
        tap((res: ResponseDto) => {
          this.total = res.info.count;
          this.characters = res.results as CharacterDto[];
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
              this.characters = [];
              return EMPTY;
            })
          )
        ),
        tap((res: ResponseDto | undefined) => {
          this.total = res?.info.count || 0;
          this.characters = (res?.results as CharacterDto[]) || [];
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
