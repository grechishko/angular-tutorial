import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  flag: boolean = false;

  constructor() { }

  add(message: string) {
    this.messages.push(message);
    this.test();
  }

  clear() {
    this.messages = [];
  }

  test() {
    this.flag = true;
    setTimeout(function() {
      this.flag = false;
      console.log(this.flag);
    }, 3000);
  }
  
}
