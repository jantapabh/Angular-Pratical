import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //บอกว่าไฟล์ app ที่ต้องการใช้อยู่ที่ไหน
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //เป็นคลาสที่ถูกมองว่าเป็น attribute
  title = 'Tour of Heroes'; //ประกาศตัวแปรตรงๆ ได้เลย
}
