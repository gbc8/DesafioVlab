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
    window.scrollTo(0, 0);
    this.tabClick.emit(tab);
  }
}