import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CompareCharactersService } from 'src/app/services/compare-characters.service';

@Component({
  selector: 'app-compare-bar',
  templateUrl: './compare-bar.html',
  styles: [],
})
export class CompareBar implements OnInit {
  constructor(private compareCharactersService: CompareCharactersService) {}
  characters: CharacterDto[] = [];
  private readonly destroy$ = new Subject();

  ngOnInit(): void {
    this.compareCharactersService.compareList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((characters) => {
        this.characters = characters;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showComparison() {
    this.compareCharactersService.showModal()
  }
}
