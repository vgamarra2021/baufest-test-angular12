import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episodes-section',
  templateUrl: './episodes-section.html',
  styles: [],
})
export class EpisodesSection implements OnInit {
  constructor(private service: EpisodeService) {}

  episodes: EpisodeDto[] = [];
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
          this.episodes = res.results as EpisodeDto[];
        })
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
