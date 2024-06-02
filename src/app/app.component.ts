import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="flex flex-col w-full p-6 items-center">
      <app-header-section class="w-full"></app-header-section>
      <app-search-section class="w-full"></app-search-section>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: [],
  providers: [],
})
export class AppComponent {}
