import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      order: '',
    });
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe);
  }

  onClean() {
    this.formGroup.reset();
  }

  onSubmit() {
    const sub = this.gameService.getSortedFilter(this.formGroup.value.order).subscribe(data => {
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
}