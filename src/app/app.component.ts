import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  constructor (){
    // setTimeout(() => {  // setTime out
    //   this.title = "My Todo List"
    // } , 3000);
  }
}
