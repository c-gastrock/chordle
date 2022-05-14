import { Component, OnInit } from '@angular/core';
import { ChordComponent } from '../chord/chord.component';

@Component({
  selector: 'app-chord-input',
  templateUrl: './chord-input.component.html',
  styleUrls: ['./chord-input.component.less']
})
export class ChordInputComponent implements OnInit {

  chords: Array<ChordComponent>;
  selected: number;
  numChords: number;

  constructor() {
    this.selected = 0;
    this.numChords = 5;
    this.chords = [];

    for (let i: number = 0; i < this.numChords; i++){
      this.chords.push(new ChordComponent());
    }
  }

  ngOnInit(): void {
    document.addEventListener("keydown", (e)=>this.parseKeyboard(e));
  }

  /**
   * Parses user's keyboard input.
   * 
   * @remarks
   * Number keys (1-7) correspond to their Roman numeral counterparts. QWER
   * correspond to dim/min/maj/aug.
   * 
   * @example
   * TODO
   */

  parseKeyboard(input: KeyboardEvent): void{
    let key: string = input.key;
    let numRgx: RegExp = /[1234567]/; // 7 chords instead of \d
    let qualityRgx: RegExp = new RegExp(/[qwer]/, "i");
    let selectRgx: RegExp = new RegExp(/(ArrowLeft)|(ArrowRight)/);

    // Handle root input
    if (numRgx.test(key)){
      this.chords[this.selected].setRoot(key);
    }

    // Handle quality input
    if (qualityRgx.test(key)){
      switch(key.toLowerCase()){
        case('q'):
          this.chords[this.selected].setQuality("dim");
          break;
        case('w'):
          this.chords[this.selected].setQuality("min");
          break;
        case('e'):
          this.chords[this.selected].setQuality("maj");
          break;
        case('r'):
          this.chords[this.selected].setQuality("aug");
          break;
      }
    }

    // Change selected chord
    if (selectRgx.test(key)){
      key == "ArrowLeft" ? this.selectChord("left") : this.selectChord("right");
    }
  }

  selectChord(movement: "left" | "right"){
    if (movement == "left"){
      this.selected == 0 ? this.selected = 0 : this.selected--;
    }
    else{
      this.selected == this.numChords - 1 ? this.selected = this.numChords - 1 : this.selected++;
    }
  }
}
