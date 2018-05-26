import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-template',
  templateUrl: './pipe-template.component.html',
  styleUrls: ['./pipe-template.component.css']
})
export class PipeTemplateComponent {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
