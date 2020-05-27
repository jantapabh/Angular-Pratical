import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  //เพิ่มข้อมูล

  clear() {
    this.messages = [];
  }
  //ลบข้อมูล
  constructor() { }
}
