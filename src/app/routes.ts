import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  // { path: '', component: SidenavComponent, children: [

  //     { path: 'home', component: HomeComponent },
];
