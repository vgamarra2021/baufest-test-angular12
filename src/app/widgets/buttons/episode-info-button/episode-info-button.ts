import { Component, EventEmitter, Input, Output } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { ModalService } from 'src/app/services/modal.service';
import { UrlUtil } from 'src/app/utils/url-util';

@Component({
  selector: 'app-episode-info-button',
  templateUrl: './episode-info-button.html',
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class EpisodeInfoButton {
  @Input() episode!: EpisodeDto;
  @Input() title!: string;

  constructor(
    private episodeService: EpisodeService,
    private characterService: CharacterService,
    private modalService: ModalService
  ) {}

  showDetails() {
    of(this.episode)
      .pipe(
        switchMap((episode) => {
          const characterIds = episode.characters.map((characterUrl) =>
            Number(UrlUtil.getIdFromUrl(characterUrl))
          );
          const characters$ =
            this.characterService.getMultiplesItemsByIds<CharacterDto[]>(
              characterIds
            );
          return forkJoin({
            episode: of(episode),
            characters: characters$,
          });
        })
      )
      .subscribe((response) => {
        this.modalService.modal$.next(response);
      });
  }
}
