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

@NgModule({
  declarations: [
    AppComponent,
    SearchBar,
    SearchSection,
    SelectButtonComponent,
    CharacterCard,
    CardFeature,
    NavSection,
    HeaderSection,
    CharactersSection,
    EpisodesSection,
    LocationsSection,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'characters', component: CharactersSection },
      { path: 'episodes', component: EpisodesSection },
      { path: 'locations', component: LocationsSection },
      { path: '**', redirectTo: '/characters', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
