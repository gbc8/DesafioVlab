import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from 'app/models/Game';
import { GamesService } from 'app/services/games/games.service';

@Component({
  selector: 'app-games-listing',
  templateUrl: './games-listing.component.html',
  styleUrl: './games-listing.component.scss'
})
export class GamesListingComponent implements OnInit {
  @Input()
  games!: Game[];

  favorite = false;

  constructor(private gameService: GamesService){
  }
  
  ngOnInit(){
  }

  @Output()
  cardClicked = new EventEmitter<Game>();

  onClick(game: Game){
    this.cardClicked.emit(game);
  }

  onFavoriteIconClick(favoriteGame: Game){
    let index = this.games.findIndex(game => game.id == favoriteGame.id);
    this.switchFavoriteStatus(index);
    this.gameService.favoriteEvent(favoriteGame.id);
  }

  switchFavoriteStatus(index: number){
    if(this.games[index].favorite == 'favorite_border'){
      this.games[index].favorite = 'favorite';
    }else{
      this.games[index].favorite = 'favorite_border';
    }
  }
}