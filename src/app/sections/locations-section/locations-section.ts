import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-section',
  template: `
    <p>
      locations-section works!
    </p>
  `,
  styles: [
  ]
})
export class LocationsSection implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init locations')
  }

}
