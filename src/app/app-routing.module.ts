
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//import Dashborad
import { DashboardComponent }   from './dashboard/dashboard.component';

//import HeroDetailComponent
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

//ทำการ import RouterModule และ Routes และต่อไปให้ทำการ import HeroesComponent เพื่อทำาการ router ได้ 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, //:id บอกว่าสามารถกำหนดเป็นอะไรก็ได้
  { path: 'heroes', component: HeroesComponent }
]; // ส่วนกำหนด path ของไฟล์โดย path คือส่วนที่เป็น url และ component คือส่วนที่จะไป

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot เป็นการบอกว่าเป็นฟังก์ชั่นที่อยู่นอกสุด
  exports: [RouterModule]
})

export class AppRoutingModule { }