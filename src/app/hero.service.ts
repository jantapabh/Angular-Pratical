import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}

// injectable เป็นการบอกว่าอะไรเป็น service บ้าง inject คือเราสามารถนำไปใส่ในคลาสอื้่นได้
//สร้าง service เพื่อเรียกใช้งาน ซึ่ง component ไว้สำหรับแสดงข้อมูลเท่านั้น เปรียบเสมือน controller