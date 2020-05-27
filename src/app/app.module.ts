import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [ //เป็นการบอกว่ามี components อะไรบ้าง
    AppComponent,
    HeroesComponent
  ],
  imports: [ //เป็นการดึงโมดูลมาใช้
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //เป็นการกำหนดจุดเริ่มต้นของ app
  
})
export class AppModule { }
