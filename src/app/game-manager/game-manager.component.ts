import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.less']
})
export class GameManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("keydown", (e)=>this.submitGuess(e));
  }

  submitGuess(e: KeyboardEvent): void {
    if(e.key == "Enter"){ 

    }
  }

}
