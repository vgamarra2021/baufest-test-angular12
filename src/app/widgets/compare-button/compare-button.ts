import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compare-button',
  templateUrl: './compare-button.html',
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class CompareButton {
  @Input() title: string = '';
}
