import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'app/models/Game';
import { GameDetails } from 'app/models/GameDetails';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  readonly baseUrl = "http://localhost:4123/https://www.freetogame.com/api/";
  private allGamesSubject: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);
  private allGames$: Observable<Game[]> = this.allGamesSubject.asObservable();
  private filteredGames: Game[] = [];
  
  constructor(private http: HttpClient) {
    this.http.get<Game[]>(this.baseUrl + "games").subscribe(data => {
      this.allGamesSubject.next(data);
      this.filteredGames = data;
    });
  }

  getAllGames() {
    return this.allGames$;
  }

  getGameDetail(id: number){
    return this.http.get<GameDetails>(this.baseUrl + "game?id="+id);
  }

  insertFavorite(id: number){
    let favoriteGames = this.getFavoriteGamesArray();
    favoriteGames.push(id);
    this.setFavoriteGamesArray(favoriteGames);
  }

  removeFavorite(id: number){
    let favoriteGames = this.getFavoriteGamesArray();
    favoriteGames = favoriteGames.filter(gameId => gameId != id);
    this.setFavoriteGamesArray(favoriteGames);
  }

  isFavorite(id: number){
    let favoriteGames = this.getFavoriteGamesArray();
    return favoriteGames.filter(gameId => gameId == id).length > 0;
  }

  favoriteEvent(id: number){
    if(this.isFavorite(id)){
      this.removeFavorite(id);
    }else{
      this.insertFavorite(id); 
    }
  }

  getFavoriteGamesArray(){
    let arrayLocal: string | null = localStorage.getItem('favoriteGames');
    let favoriteGames: number[] = [];

    if(arrayLocal != null){
      favoriteGames = JSON.parse(arrayLocal);
    }

    return favoriteGames;
  }

  setFavoriteGamesArray(favoriteGames: number[]){
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
  }

  // get by platform
  // get by release date
  // get by category
  // get by developer
}
