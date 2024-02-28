import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games/games.service';
import { Game } from './models/Game';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameDetails } from 'app/models/GameDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{

  gameList: Game[] = [];
  filteredList: Game[] = [];

  constructor(private gameService: GamesService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(data => {
      this.gameList = data;
      this.gameList.map(game => {
        if(this.gameService.isFavorite(game.id)){
          game.favorite = "favorite";
        }else{
          game.favorite = "favorite_border";
        }
      });
      this.filteredList = this.gameList;
    });
  }

  tabClick(tab: string) {
    if(tab == 'favorite'){
      this.filteredList = this.gameList.filter(game => game.favorite == 'favorite');
    }else{
      this.filteredList = this.gameList;
    }
  }

  onCardClicked(game: Game){
    this.openDialog(game);
  }

  openDialog(game: Game) {
    
    this.gameService.getGameDetail(game.id).subscribe(gameDetails => {
      gameDetails.favorite = game.favorite;
      const dialogRef = this.dialog.open(GameDetailComponent, {data: gameDetails});
    });
  }
}