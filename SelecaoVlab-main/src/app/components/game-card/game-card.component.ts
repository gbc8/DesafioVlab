import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Game } from 'app/models/Game';

@Component({
  selector: 'game-card-app',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input()
  game!: Game;
}
