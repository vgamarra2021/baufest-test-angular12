import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { LocationDto } from 'src/app/model/location/location.dto';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations-section',
  templateUrl: './locations-section.html',
  styles: [],
})
export class LocationsSection implements OnInit, OnDestroy {
  constructor(private service: LocationService) {}

  locations: LocationDto[] = [];
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
          this.locations = res.results as LocationDto[];
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
              this.locations = [];
              return EMPTY;
            })
          )
        ),
        tap((res: ResponseDto | undefined) => {
          this.total = res?.info.count || 0;
          this.locations = (res?.results as LocationDto[]) || [];
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
