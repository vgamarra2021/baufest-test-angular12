import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  template: `
    <div
      class="select-button flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer shad shadow-white select-none transition-all duration-300 ease-in-out shadow-white"
      [ngClass]="{ selected: !isActive }"
    >
      <p class="text-lg drop-shadow-lg font-medium">
        {{ title }}
      </p>
    </div>
  `,
  styles: [
    `
      .select-button {
        background-image: url('src/assets/imgs/bg-green.webp');
        background-size: cover;
        filter: grayscale(0%);
        &:hover {
          filter: grayscale(30%);
          box-shadow: 0px 0px 4px #fff;
        }
      }

      .selected {
        filter: grayscale(100%);
      }

      p {
        text-shadow: 0 0 black;
      }
    `,
  ],
})
export class SelectButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() isActive: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
