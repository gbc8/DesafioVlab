import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListingComponent } from './games-listing/games-listing.component';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [
    GamesListingComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }
