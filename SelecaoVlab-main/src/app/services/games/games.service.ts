import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'app/models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:4123/https://www.freetogame.com/api/";

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<Game>(this.baseUrl + "games");
  }
}
