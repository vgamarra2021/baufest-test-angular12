import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { CompareCharactersService } from 'src/app/services/compare-characters.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-comparison-modal',
  templateUrl: './comparison-modal.html',
  styles: [
    `
      td {
        @apply text-center;
      }
    `,
  ],
})
export class ComparisonModal extends BaseComponent implements OnInit {
  constructor(
    private bootstrapModalService: NgbModal,
    private compareCharactersService: CompareCharactersService
  ) {
    super();
  }

  @ViewChild('content') modalContent!: TemplateRef<any>;
  characters: CharacterDto[] = [];

  ngOnInit(): void {
    this.compareCharactersService.modal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.characters = res;
        this.open();
      });
  }

  open() {
    this.bootstrapModalService.open(this.modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      animation: true,
      size: 'lg',
    });
  }

  countCommonEpisodies(selectedCharacter: CharacterDto) {
    const othersCharacters = this.characters.filter(
      (character) => character.id !== selectedCharacter.id
    );
    return othersCharacters.map((character) => {
      const commonEpisodes = character.episode.filter(
        (episode) => selectedCharacter.episode.indexOf(episode) !== -1
      );
      return {
        name: character.name,
        count: commonEpisodes.length,
      };
    });
  }
}
