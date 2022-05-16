import { Component, Input, OnInit } from '@angular/core';
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

  parser = (e: KeyboardEvent) => this.parseKeyboard(e);

  constructor() {
    this.selected = 0;
    this.numChords = 5;
    this.chords = [];
  }

  ngOnInit(): void {
    for (let i: number = 0; i < this.numChords; i++){
      this.chords.push(new ChordComponent());
    }
    //document.addEventListener("keydown", (e) => this.parseKeyboard(e));
    document.addEventListener("keydown", this.parser);
  }

  reset(): void {
    this.selected = 0;
    //document.removeEventListener("keydown", this.parser);
    //document.addEventListener("keydown", this.parser);
  }

  /**
   * Parses user's keyboard input.
   * 
   * @remarks
   * Number keys (1-7) correspond to their Roman numeral counterparts. QWER
   * correspond to dim/min/maj/aug.
   * 
   * @example
   * // Selects a chord to edit to be a minor IV chord (iv).
   * USER PRESSES: 'ArrowRight' > '4' > 'W' (or 'W' > '4'; order does not matter).
   */

  parseKeyboard(input: KeyboardEvent): void{

    let key: string = input.key;

    // Parse for input categories (root input, chord quality, selecting which chord to edit, etc.)
    let rootRgx: RegExp = /[1234567]/;
    let qualityRgx: RegExp = new RegExp(/[qwer]/, "i");
    let selectRgx: RegExp = new RegExp(/(ArrowLeft)|(ArrowRight)/);

    if (rootRgx.test(key)){
      this.chords[this.selected].setRoot(key);
    }

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
