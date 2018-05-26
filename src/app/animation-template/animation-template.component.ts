import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-animation-template',
  template: `
  <h2>Animation</h2>
  <div class="buttons">
    <button [disabled]="!heroService.canAdd()" (click)="heroService.addInactive()">Add inactive hero</button>
    <button [disabled]="!heroService.canAdd()" (click)="heroService.addActive()">Add active hero</button>
    <button [disabled]="!heroService.canRemove()" (click)="heroService.remove()">Remove hero</button>
  </div>
  <ul>
    <li *ngFor="let hero of heroes"
      [@heroState]="hero.state"
      (@flyInOut.start)="animationStarted($event)"
      (@flyInOut.done)="animationDone($event)"
      [@flyInOut]="'in'"
      (click)="hero.toggleState()">
      {{hero.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./animation-template.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.3 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ]),
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive <=> active', animate('100ms ease-out'))
    ]),
  ]
})
export class AnimationTemplateComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }
  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }
}
