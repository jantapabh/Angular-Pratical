import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //บอกว่าไฟล์ app ที่ต้องการใช้อยู่ที่ไหน
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-heroes';
}
