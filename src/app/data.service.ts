import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  x:any;
  private messageSource = new BehaviorSubject( this.x);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  
  changeMessage(message: object) {
    this.messageSource.next(message)
  }
}
