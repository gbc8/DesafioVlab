import { Component } from '@angular/core';
import { GamesService } from './services/games/games.service';
import { Game } from './models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  gameList: Game[] = []

  constructor(private gameService: GamesService){
    this.gameService.getAllGames().subscribe(data => this.gameList = data);
  }
}
