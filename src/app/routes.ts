import { Routes } from '@angular/router';
import { CharactersSection } from './sections/content-sections/characters-section/characters-section';
import { EpisodesSection } from './sections/content-sections/episodes-section/episodes-section';
import { LocationsSection } from './sections/content-sections/locations-section/locations-section';

export const routes: Routes = [
  { path: 'characters', component: CharactersSection },
  { path: 'episodes', component: EpisodesSection },
  { path: 'locations', component: LocationsSection },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
];
