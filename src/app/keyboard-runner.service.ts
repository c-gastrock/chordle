import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

/*
* currently normal kb input works, but keyboard runner doesn't die upon user
* entering a line (still inputs in old line).
*/

@Injectable({
  providedIn: 'root'
})
export class KeyboardRunnerService {

  private keyboardSubject: Subject<KeyboardEvent>;

  constructor() {
    this.keyboardSubject = new Subject<KeyboardEvent>();
  }

  clickKey(key: KeyboardEvent): void {
    this.keyboardSubject.next(key);
  }

  onKeyClicked(): Observable<KeyboardEvent>{
    return this.keyboardSubject;
  }
}
