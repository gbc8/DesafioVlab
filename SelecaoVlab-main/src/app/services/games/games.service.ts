import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'app/models/Game';
import { GameDetails } from 'app/models/GameDetails';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:4123/https://www.freetogame.com/api/";


  constructor(private http: HttpClient) {
  }

  getAllGames() {
    return this.http.get<Game[]>(this.baseUrl + "games");
  }

  getGameDetail(id: number){
    return this.http.get<GameDetails>(this.baseUrl + "game?id="+id);
  }

  // get by platform
  // get by release date
  // get by category
  // get by developer
}
