import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {


  //ทำการ inject message service เพื่อใช้งาน จะดึง add กับ clear มาเพื่อให้ทำงานได้
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}

// injectable เป็นการบอกว่าอะไรเป็น service บ้าง inject คือเราสามารถนำไปใส่ในคลาสอื้่นได้
//สร้าง service เพื่อเรียกใช้งาน ซึ่ง component ไว้สำหรับแสดงข้อมูลเท่านั้น เปรียบเสมือน controller