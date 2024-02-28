import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GamesListingComponent } from './components/games-listing/games-listing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesListingComponent,
    GameCardComponent,
    GameDetailComponent, 
    FilterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule, 
    MatButtonModule,
    MatIconModule
    ],
  providers: [
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
