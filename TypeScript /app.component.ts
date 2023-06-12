import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Acropolis';
  b= {enroll:1,name:"xyz"};
  c:boolean= true;
  cities:string []=["indore","Piyush", "mita", "palak", "nayan"]

  xyz()
  {
   alert("yo whats up");
  }

}


 
