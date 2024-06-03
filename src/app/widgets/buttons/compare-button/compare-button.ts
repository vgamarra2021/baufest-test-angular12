import { Component, Input } from '@angular/core';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CharacterService } from 'src/app/services/character.service';
import { CompareCharactersService } from 'src/app/services/compare-characters.service';

@Component({
  selector: 'app-compare-button',
  templateUrl: './compare-button.html',
})
export class CompareButton {
  @Input() title: string = '';
  @Input() character!: CharacterDto;

  constructor(private compareCharacterService: CompareCharactersService) {}

  selectCharacter() {
    this.compareCharacterService.selectCharacter(this.character)
  }
}
