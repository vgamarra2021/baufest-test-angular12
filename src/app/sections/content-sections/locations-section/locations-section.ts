import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { LocationDto } from 'src/app/model/location/location.dto';
import { LocationService } from 'src/app/services/location.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-locations-section',
  templateUrl: './locations-section.html',
  styles: [],
})
export class LocationsSection implements OnInit, OnDestroy {
  constructor(
    private service: LocationService,
    private searchService: SearchService
  ) {}

  locations: LocationDto[] = [];
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
          console.log(response);
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
          this.locations = [];
          return EMPTY;
        }),
        tap((res: ResponseDto | undefined) => {
          this.total = res?.info.count || 0;
          this.locations = (res?.results as LocationDto[]) || [];
        })
      )
      .subscribe();
  }
}
