import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  template: `
    <header class="flex justify-start w-full">
      <img src="assets/imgs/Logo-Baufest-blanco.png" alt="Baufest Logo" class="h-10 md:h-auto" />
    </header>
  `,
  styles: [
  ],
})
export class HeaderSection {
  constructor() {}
}
