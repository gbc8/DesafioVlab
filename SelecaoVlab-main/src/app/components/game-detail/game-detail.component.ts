import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameDetails } from 'app/models/GameDetails';
import { GamesService } from 'app/services/games/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss'
})
export class GameDetailComponent {

  game!: GameDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public data: GameDetails, private gameService: GamesService){
    this.game = data;
  }

  onFavoriteClick(game: GameDetails){
    this.switchFavoriteStatus(game);
    this.gameService.favoriteEvent(game.id);
  }

  switchFavoriteStatus(game: GameDetails){
    if(game.favorite == 'favorite_border'){
      game.favorite = 'favorite';
    }else{
      game.favorite = 'favorite_border';
    }
  }
}
