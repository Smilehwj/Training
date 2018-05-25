import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  myHero = this.heroes[0];
  str: string;

  alert(msg?: string) { window.alert(msg); }
  getVal(): number { return this.heroes.length; }
  callPhone(value: string) { this.alert(`Calling ${value} ...`); }
  show(content: string) { this.str = content; }
}
