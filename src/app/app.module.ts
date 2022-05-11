import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChordInputComponent } from './chord-input/chord-input.component';
import { GuessHistoryComponent } from './guess-history/guess-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordInputComponent,
    GuessHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
