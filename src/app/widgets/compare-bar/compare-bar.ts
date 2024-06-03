import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CompareCharactersService } from 'src/app/services/compare-characters.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-compare-bar',
  templateUrl: './compare-bar.html',
  styles: [],
})
export class CompareBar extends BaseComponent implements OnInit {
  constructor(private compareCharactersService: CompareCharactersService) {
    super();
  }
  characters: CharacterDto[] = [];
  visible: boolean = false;

  ngOnInit(): void {
    this.compareCharactersService.compareList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((characters) => {
        this.characters = characters;
        characters.length === 0
          ? (this.visible = false)
          : (this.visible = true);
      });
  }

  showComparison() {
    if (this.characters.length > 1) this.compareCharactersService.showModal();
  }
}
