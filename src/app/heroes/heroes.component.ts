import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    
   }

  ngOnInit(): void {

      this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}

//oninit ดึงมาก่อนทุกครั้งและต้องทำการ import 
// วิธีแบบ origin จะใช้ asyn / await กับ observe จะแตกต่างกันโดยการใช้ observe จะทำให้การดึงข้อมูลไม่ค้างเมื่อดึงข้อมูลจาก server