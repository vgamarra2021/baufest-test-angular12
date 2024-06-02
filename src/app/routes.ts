import { Routes } from '@angular/router';
import { CharactersSection } from './sections/characters-section/characters-section';
import { EpisodesSection } from './sections/episodes-section/episodes-section';
import { LocationsSection } from './sections/locations-section/locations-section';

export const routes: Routes = [
  { path: 'characters', component: CharactersSection },
  { path: 'episodes', component: EpisodesSection },
  { path: 'locations', component: LocationsSection },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
];
