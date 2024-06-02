import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-section',
  template: `
    <p>
      episodes-section works!
    </p>
  `,
  styles: [
  ]
})
export class EpisodesSection implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init episodes')
  }

}
