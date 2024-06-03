import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CharacterDto } from 'src/app/model/character/character.dto';
import { EpisodeDto } from 'src/app/model/episode/episode.dto';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-episode-modal',
  templateUrl: './episode-modal.html',
  styles: [],
})
export class EpisodeModal implements OnInit, OnDestroy {
  constructor(
    private bootstrapModalService: NgbModal,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.modal$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.episode = res.episode;
      this.characters = res.characters;
      this.open();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  episode: EpisodeDto | null = null;
  characters: CharacterDto[] = [];
  @ViewChild('content') modalContent!: TemplateRef<any>;
  private readonly destroy$ = new Subject();

  open() {
    this.bootstrapModalService.open(this.modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      animation: true,
      size: 'lg',
    });
  }
}
