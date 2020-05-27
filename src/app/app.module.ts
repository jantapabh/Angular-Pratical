import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//import component
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [ //เป็นการบอกว่ามี components อะไรบ้าง

    AppComponent, 
    HeroesComponent, HeroDetailComponent, MessagesComponent,
    
  ],
  imports: [ //เป็นการดึงโมดูลมาใช้
    
    BrowserModule,
    AppRoutingModule,
    FormsModule //import form เพื่อสามารถเปลี่ยนค่าในฟอร์มได้
  ],
  providers: [],
  bootstrap: [AppComponent] //เป็นการกำหนดจุดเริ่มต้นของ app
  
})
export class AppModule { }


// ใน form module มี directive ชื่อ ngModel อยู่