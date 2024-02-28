import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output()
  tabClick = new EventEmitter<string>;

  onTabClick(tab: string){
    this.tabClick.emit(tab);
  }
}