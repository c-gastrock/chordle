import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.less']
})
export class VirtualKeyboardComponent implements OnInit {

  @Output()
  keyboardClicked: EventEmitter<KeyboardEvent> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  keyAdapter(virtualKey: any): void{
    let realKey: KeyboardEvent;
    if (!virtualKey.target.textContent){
      return;
    }
    
    realKey = new KeyboardEvent("keydown", {
      "key": virtualKey.target.textContent
    });
    this.keyboardClicked.emit(realKey);
  }

}
