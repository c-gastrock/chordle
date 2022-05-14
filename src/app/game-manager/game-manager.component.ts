import { Component, OnInit } from '@angular/core';
import { ChordInputComponent } from '../chord-input/chord-input.component';
import { ChordComponent } from '../chord/chord.component';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.less']
})
export class GameManagerComponent implements OnInit {

  rows: Array<Array<ChordComponent>>;
  userInput: ChordInputComponent;
  activeRow: number;

  constructor() {
    this.rows = new Array<Array<ChordComponent>>(6);
    this.userInput = new ChordInputComponent();
    this.activeRow = 0;
  }

  ngOnInit(): void {
    document.addEventListener("keydown", (e)=>this.submitGuess(e));
  }

  submitGuess(e: KeyboardEvent): void {
    if(e.key != "Enter"){
      return;
    }

    this.rows[this.activeRow] = this.userInput.chords;
    this.activeRow++;
    this.userInput = new ChordInputComponent();
  }
}
