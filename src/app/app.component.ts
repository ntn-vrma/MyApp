import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  isLogin=false;
  loginHandler(text:Event){
    console.log(text)
    this.isLogin=true    
  }
  logoutHandler(text:Event){
    console.log(text)
    this.isLogin=false 

  }
}

