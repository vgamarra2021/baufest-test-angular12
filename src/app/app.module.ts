import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { routes } from './routes';
import { CharactersSection } from './sections/content-sections/characters-section/characters-section';
import { EpisodesSection } from './sections/content-sections/episodes-section/episodes-section';
import { LocationsSection } from './sections/content-sections/locations-section/locations-section';
import { HeaderSection } from './sections/header-section/header-section';
import { NavSection } from './sections/nav-section/nav-section';
import { SearchSection } from './sections/search-section/search-section';
import { CompareButton } from './widgets/buttons/compare-button/compare-button';
import { EpisodeInfoButton } from './widgets/buttons/episode-info-button/episode-info-button';
import { NavButton } from './widgets/buttons/nav-button/nav-button';
import { SingleButton } from './widgets/buttons/single-button/single-button.component';
import { CardFeature } from './widgets/cards/card-feature/card-feature';
import { CharacterCard } from './widgets/cards/character-card/character-card';
import { EpisodeCard } from './widgets/cards/episode-card/episode-card';
import { LocationCard } from './widgets/cards/location-card/location-card';
import { CompareBar } from './widgets/compare-bar/compare-bar';
import { CustomPaginator } from './widgets/custom-pagination/custom-paginator';
import { ComparisonModal } from './widgets/modals/comparison-modal/comparison-modal';
import { EpisodeModal } from './widgets/modals/episode-modal/episode-modal';
import { SearchBar } from './widgets/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBar,
    CompareBar,
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
    EpisodeInfoButton,
    CompareButton,
    SingleButton,
    EpisodeModal,
    ComparisonModal,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
