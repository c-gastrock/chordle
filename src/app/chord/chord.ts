
/**
   * Represents a standard analysis of a chord.
   */
export class Chord {

  root: string;
  quality: "+" | "" | "o"; // quality symbol to display
  inversion: 0 | 1 | 2 | 3; // root position = 0

  constructor(){
    this.root = "-";
    this.quality = "";
    this.inversion = 0;
  }

  setQuality(qualityCode: string){

    switch(qualityCode){
      case('dim'):
        this.quality = "o";
        this.root = this.root.toLowerCase();
        break;
      case('min'):
        this.quality = "";
        this.root = this.root.toLowerCase();
        break;
      case('maj'):
        this.quality = "";
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
      case('1'): this.root = "i";
        break;
      case('2'): this.root = "ii";
        break;
      case('3'): this.root = "iii";
        break;
      case('4'): this.root = "iv";
        break;
      case('5'): this.root = "v";
        break;
      case('6'): this.root = "vi";
        break;
      case('7'): this.root = "vii";
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
