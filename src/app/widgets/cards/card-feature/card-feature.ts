import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-feature',
  template: `
    <div
      class="flex flex-row items-center text-gray-700 w-full gap-2 break-all"
    >
      <ng-content></ng-content>
      <p class="text-base w-full">{{ value }}</p>
    </div>
  `,
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class CardFeature {
  @Input() value: string | number = '';
}
