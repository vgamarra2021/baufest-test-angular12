import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  template: `
    <div
      class="select-button flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer shad hover:shadow-lg shadow-white select-none"
      [ngClass]="!isActive ? 'selected' : ''"
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
