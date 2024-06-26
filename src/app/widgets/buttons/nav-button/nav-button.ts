import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  template: `
    <a
      [routerLink]="value"
      routerLinkActive="active"
      class="flex items-center justify-center rounded-lg py-2 px-3 sm:px-4 cursor-pointer select-none transition-all duration-300 ease-in-out hover:no-underline hover:text-current"
    >
      <p class="text-md sm:text-xl drop-shadow-lg font-medium">
        {{ title }}
      </p>
    </a>
  `,
  styles: [
    `
      a {
        background-image: url('src/assets/imgs/bg-green.webp');
        background-size: cover;
        filter: grayscale(100%);
      }
      a:hover {
        filter: grayscale(60%);
        box-shadow: 0px 0px 4px #fff;
      }
      a.active {
        filter: grayscale(40%);
      }
      p {
        text-shadow: 0 0 black;
      }
    `,
  ],
})
export class NavButton {
  @Input() title: string = '';
  @Input() value: string = '';
}
