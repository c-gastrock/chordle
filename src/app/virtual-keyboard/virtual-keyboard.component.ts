import { Component, OnInit } from '@angular/core';
import { KeyboardRunnerService } from '../keyboard-runner.service';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.less']
})
export class VirtualKeyboardComponent implements OnInit {

  constructor(private vBoardService: KeyboardRunnerService) {
  }

  ngOnInit(): void {
  }

  keyAdapter(virtualKey: any): void{
    let key: KeyboardEvent;
    if (!virtualKey.target.textContent){
      return;
    }
    
    key = new KeyboardEvent("keydown", {
      "key": virtualKey.target.textContent
    });
    this.vBoardService.clickKey(key);
  }

}
