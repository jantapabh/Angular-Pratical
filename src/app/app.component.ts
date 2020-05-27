import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //ตัวบอกว่าจะเรียกใช้ตรงไหย ยังไง
  templateUrl: './app.component.html', //บอกว่าไฟล์ app ที่ต้องการใช้อยู่ที่ไหน เหมือนอ้างอิงให้ไปแสดงที่ไฟล์ app.component.html
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //เป็นคลาสที่ถูกมองว่าเป็น attribute
  title = 'Tour of Heroes'; //ประกาศตัวแปรตรงๆ ได้เลย
}
