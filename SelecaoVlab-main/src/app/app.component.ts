import { Component, OnDestroy, OnInit } from '@angular/core';
import { GamesService } from './services/games/games.service';
import { Game } from './models/Game';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy{

  gameList: Game[] = [];
  subs: Subscription[] = [];

  constructor(private gameService: GamesService, public dialog: MatDialog){}

  ngOnInit(): void {
    const sub = this.gameService.getAllGames().subscribe(data => {
      this.gameList = data;
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  filterEvent() {
    this.gameList = this.gameService.getFilteredGames();
  }

  tabClick(tab: string) {
    if(tab == 'favorite'){
      this.gameList = this.gameService.getFavoriteGames();
    }else{
      this.gameList = this.gameService.getFilteredGames();
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