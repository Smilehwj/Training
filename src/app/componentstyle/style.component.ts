import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  template: `
      <div class='title'>
        style implements
      </div>
      <h1>Tour of Heroes</h1>
      <div>
        <app-style-child></app-style-child>
      </div>
    `,
  styles: [
    'h1 { font-weight: normal; }',
    '.title { color: blueviolet; font-weight: bold; font-size: 20px;}',
  ]
})

export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
