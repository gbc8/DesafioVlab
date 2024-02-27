import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameDetails } from 'app/models/GameDetails';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss'
})
export class GameDetailComponent {

  game!: GameDetails;

  constructor(@Inject(MAT_DIALOG_DATA) public data: GameDetails){
    this.game = data;
  }
}
