import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from 'app/models/Game';

@Component({
  selector: 'app-games-listing',
  templateUrl: './games-listing.component.html',
  styleUrl: './games-listing.component.scss'
})
export class GamesListingComponent implements OnInit {
  @Input()
  games!: Game[];

  constructor(){
  }
  
  ngOnInit(){
  }

  @Output()
  cardClicked = new EventEmitter<number>();

  onClick(id: number){
    this.cardClicked.emit(id);
  }
}