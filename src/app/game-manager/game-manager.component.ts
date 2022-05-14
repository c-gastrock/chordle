import { Component, OnInit } from '@angular/core';
import { ChordComponent } from '../chord/chord.component';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.less']
})
export class GameManagerComponent implements OnInit {

  rows: Array<ChordComponent>;
  activeRow: number;

  constructor() {
    this.rows = new Array<ChordComponent>(6);
    this.activeRow = 0;
  }

  ngOnInit(): void {
    document.addEventListener("keydown", (e)=>this.submitGuess(e));
  }

  submitGuess(e: KeyboardEvent): void {
    if(e.key == "Enter"){ 

    }
  }

}
