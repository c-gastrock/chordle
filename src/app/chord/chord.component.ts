import { Component, OnInit, Input } from '@angular/core';

/**
   * Represents a standard analysis of a chord.
   */
 @Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.less']
})
export class ChordComponent implements OnInit{

  // Allows ChordInputComponent to alter ChordComponent's values in view.

  @Input() root: string;
  @Input() quality: "+" | "min" | "maj" | "o"; // quality symbol to display
  @Input() inversion: 0 | 1 | 2 | 3; // root position = 0

  constructor(){
    this.root = "";
    this.quality = "maj";
    this.inversion = 0;
  }

  ngOnInit(): void {
  }

  setQuality(qualityCode: string){

    switch(qualityCode){
      case('dim'):
        this.quality = "o";
        this.root = this.root.toLowerCase();
        break;
      case('min'):
        this.quality = "min";
        this.root = this.root.toLowerCase();
        break;
      case('maj'):
        this.quality = "maj";
        this.root = this.root.toUpperCase();
        break;
      case('aug'):
        this.quality = "+";
        this.root = this.root.toUpperCase();
        break;
    }
  }

  setRoot(root: string){
    switch(root){
      case('1'): this.root = this.quality == ("maj" || "+") ? "I" : "i";
        break;
      case('2'): this.root = this.quality == ("maj" || "+") ? "II" : "ii";
        break;
      case('3'): this.root = this.quality == ("maj" || "+") ? "III" : "iii";
        break;
      case('4'): this.root = this.quality == ("maj" || "+") ? "IV" : "iv";
        break;
      case('5'): this.root = this.quality == ("maj" || "+") ? "V" : "v";
        break;
      case('6'): this.root = this.quality == ("maj" || "+") ? "VI" : "vi";
        break;
      case('7'): this.root = this.quality == ("maj" || "+") ? "VII" : "vii";
    }
  }

  setInversion(inversion: number){
    switch(inversion){
      case(0): this.inversion = 0;
        break;
      case(1): this.inversion = 1;
        break;
      case(2): this.inversion = 2;
        break;
      case(3): this.inversion = 3;
    }
  }

}
