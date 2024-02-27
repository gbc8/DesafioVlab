import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-card-app',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input()
  game = {};

}
