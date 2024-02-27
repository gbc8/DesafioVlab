import { Component } from '@angular/core';
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
export class AppComponent {

  gameList: Game[] = []

  constructor(private gameService: GamesService, public dialog: MatDialog){
    this.gameService.getAllGames().subscribe(data => this.gameList = data);
  }

  onCardClicked(id: number){
    this.openDialog(id);
  }


  openDialog(id: number) {
    
    this.gameService.getGameDetail(id).subscribe(game => {
      const dialogRef = this.dialog.open(GameDetailComponent, {data: game});
    });
  }
}