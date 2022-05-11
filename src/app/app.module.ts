import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChordInputComponent } from './chord-input/chord-input.component';
import { GameManagerComponent } from './game-manager/game-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordInputComponent,
    GameManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
