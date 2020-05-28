// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//ทำการ import RouterModule และ Routes และต่อไปให้ทำการ import HeroesComponent เพื่อทำาการ router ได้ 
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
]; // ส่วนกำหนด path ของไฟล์โดย path คือส่วนที่เป็น url และ component คือส่วนที่จะไป

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }