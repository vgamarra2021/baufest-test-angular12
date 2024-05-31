import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex justify-start w-full">
      <img src="assets/imgs/Logo-Baufest-blanco.png" alt="Baufest Logo" />
    </header>
  `,
  styles: [
  ],
})
export class HeaderComponent {
  constructor() {}
}
