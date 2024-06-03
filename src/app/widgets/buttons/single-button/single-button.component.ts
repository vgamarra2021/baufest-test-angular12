import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-button',
  template: `
    <button
      class="flex items-center justify-center gap-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-80 w-full"
      (click)="click.emit()"
    >
      <p>{{ title }}</p>
    </button>
  `,
  styles: [],
})
export class SingleButton {
  @Input() title: string = '';
  @Output() click = new EventEmitter<void>();
  constructor() {}
}
