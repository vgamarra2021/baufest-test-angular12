import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { routes } from './routes';
import { CharactersSection } from './sections/content-sections/characters-section/characters-section';
import { EpisodesSection } from './sections/content-sections/episodes-section/episodes-section';
import { LocationsSection } from './sections/content-sections/locations-section/locations-section';
import { HeaderSection } from './sections/header-section/header-section';
import { NavSection } from './sections/nav-section/nav-section';
import { SearchSection } from './sections/search-section/search-section';
import { CardFeature } from './widgets/cards/card-feature/card-feature';
import { CharacterCard } from './widgets/cards/character-card/character-card';
import { EpisodeCard } from './widgets/cards/episode-card/episode-card';
import { LocationCard } from './widgets/cards/location-card/location-card';
import { CustomPaginator } from './widgets/custom-pagination/custom-paginator';
import { InfoButton } from './widgets/info-button/info-button';
import { NavButton } from './widgets/nav-button/nav-button';
import { SearchBar } from './widgets/search-bar/search-bar.component';
import { CompareButton } from './widgets/compare-button/compare-button';

@NgModule({
  declarations: [
    AppComponent,
    SearchBar,
    NavButton,
    HeaderSection,
    SearchSection,
    NavSection,
    CharactersSection,
    EpisodesSection,
    LocationsSection,
    CardFeature,
    CharacterCard,
    EpisodeCard,
    LocationCard,
    LocalDatePipe,
    CustomPaginator,
    InfoButton,
    CompareButton,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
