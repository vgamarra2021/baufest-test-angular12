import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.html',
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class InfoButton {
  @Input() title: string = '';
}
