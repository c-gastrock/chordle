import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

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
