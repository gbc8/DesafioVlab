import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'app/models/Game';
import { GamesService } from 'app/services/games/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnDestroy{

  @Output()
  filterSubmited = new EventEmitter<void>();

  formGroup!: FormGroup;

  subs: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private gameService: GamesService){
    this.formGroup = this.formBuilder.group({
      platform: '',
      date: '',
      category: '',
      developer: ''
    });
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe);
  }

  onClean() {
    this.formGroup.reset();
  }

  onSubmit() {
    const sub = this.gameService.getAllGames().subscribe(data => {

      const {platform, date, category, developer} = this.formGroup.value;

      data = data.filter(game => {
        return this.filterFunction(game, platform, date, category, developer);
      });


      data.map(game => {
        if(this.gameService.isFavorite(game.id)){
          game.favorite = "favorite";
        }else{
          game.favorite = "favorite_border";
        }
      });

      this.gameService.setFilteredGames(data);
      this.filterSubmited.emit();
    });
    this.subs.push(sub);
  }

  filterFunction(game: Game, platform: string | null, date: string | null, category: string | null, developer: string | null){
    let result: boolean = true;
        
        if(platform != null && platform != '' && platform != game.platform){
          result = false;
        }
        if(date != null && date != '' && date != game.release_date){
          result = false;
        }
        if(category != null && category != '' && category != game.genre){
          result = false;
        }
        if(developer != null && developer != '' && developer != game.developer){
          result = false;
        }

        return result;
  }
}