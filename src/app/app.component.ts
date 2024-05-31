import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.service.fetchCharacters().subscribe();
  }
  title = 'examenAngular';
}
