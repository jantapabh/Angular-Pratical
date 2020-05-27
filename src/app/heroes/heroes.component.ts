import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero = 'Winstorm';

  constructor() { }

  ngOnInit(): void { //ดึงข้อลจาก api ใช้ตรงนี้
  }

}

//oninit ดึงมาก่อนทุกครั้งและต้องทำการ import 
