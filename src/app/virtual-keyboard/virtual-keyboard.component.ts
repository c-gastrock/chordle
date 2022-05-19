import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.less']
})
export class VirtualKeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  keyboardClicked: EventEmitter<KeyboardEvent> = new EventEmitter();

  keyAdapter(virtualKey: any): void{
    let realKey: KeyboardEvent;
    if (!virtualKey.target.textContent){
      console.log("Virtual Key Parse Error");
      return;
    }
    
    realKey = new KeyboardEvent("keydown", {"key": virtualKey.target.textContent});
    this.keyboardClicked.emit(realKey);
  }

}
