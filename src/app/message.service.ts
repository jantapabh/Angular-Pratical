import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

 //สร้างตัวแปร messages
  messages: string[] = [];

  //เพิ่มข้อมูล
  add(message: string) {
    this.messages.push(message);
  }

  //ลบข้อมูล
  clear() {
    this.messages = [];
  }
}