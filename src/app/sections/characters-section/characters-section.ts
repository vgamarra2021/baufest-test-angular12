import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { ResponseDto } from 'src/app/model/common/response.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.html',
  styles: [],
})
export class CharactersSection implements OnInit {
  constructor(private service: CharacterService) {}

  characters: CharacterDto[] = [];
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
          this.characters = res.results as CharacterDto[];
        })
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.pageSubject.next(page);
  }
}
