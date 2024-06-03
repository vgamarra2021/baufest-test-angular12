import {
  Component,

  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { EpisodeDetailService } from 'src/app/services/episode-detail.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-episode-modal',
  templateUrl: './episode-modal.html',
  styles: [],
})
export class EpisodeModal extends BaseComponent implements OnInit {
  constructor(
    private bootstrapModalService: NgbModal,
    private episodeDetailService: EpisodeDetailService
  ) {
    super();
  }

  episode: EpisodeDto | null = null;
  characters: CharacterDto[] = [];
  @ViewChild('content') modalContent!: TemplateRef<any>;

  ngOnInit(): void {
    this.episodeDetailService.modal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.episode = res.episode;
        this.characters = res.characters;
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
}
