import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-style-child',
    template: `
        <h1>Tour of Heroes</h1>
        <div class='title'>can't implement parent's css</div>
      `,
      styleUrls: ['./style.component.css']
})

export class StyleChildComponent {

}
