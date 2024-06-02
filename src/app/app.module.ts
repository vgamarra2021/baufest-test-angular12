import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderSection } from './sections/header-section/header-section';
import { SearchSection } from './sections/search-section/search-section';
import { CardFeature } from './widgets/card-feature/card-feature';
import { CharacterCard } from './widgets/character-card/character-card';
import { SearchBar } from './widgets/search-bar/search-bar.component';
import { SelectButtonComponent } from './widgets/select-button/select-button.component';
import { NavSection } from './sections/nav-section/nav-section';
import { CharactersSection } from './sections/characters-section/characters-section';
import { EpisodesSection } from './sections/episodes-section/episodes-section';
import { LocationsSection } from './sections/locations-section/locations-section';
import { routes } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchBar,
    SelectButtonComponent,
    CharacterCard,
    CardFeature,
    HeaderSection,
    SearchSection,
    NavSection,
    CharactersSection,
    EpisodesSection,
    LocationsSection,
  ],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(routes), NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
