import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { LocationDto } from 'src/app/model/location/location.dto';
import { LocationService } from 'src/app/services/location.service';
import { SearchService } from 'src/app/services/search.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-locations-section',
  templateUrl: './locations-section.html',
  styles: [],
})
export class LocationsSection extends BaseComponent implements OnInit {
  constructor(
    private service: LocationService,
    private searchService: SearchService
  ) {
    super();
  }

  locations: LocationDto[] = [];
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
