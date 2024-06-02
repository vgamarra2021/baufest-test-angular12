import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { LocationDto } from 'src/app/model/location/location.dto';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations-section',
  templateUrl: './locations-section.html',
  styles: [],
})
export class LocationsSection implements OnInit {
  constructor(private service: LocationService) {}

  locations: LocationDto[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  private pageSubject = new BehaviorSubject<number>(this.page);

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
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
