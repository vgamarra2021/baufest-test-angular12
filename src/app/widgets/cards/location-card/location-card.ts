import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.html',
  styles: [
    `
      :host {
        min-width: 300px;
      }
    `,
  ],
})
export class LocationCard implements OnInit {
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() dimension: string = '';
  @Input() residentsNumber: number = 0;
  @Input() createdDate: string = '';

  constructor() {}

  ngOnInit(): void {}
}
