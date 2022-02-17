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
  searchBox={
    placeholder:'Search',
  } 
  loginButton={
    name:'Login',
    buttonClass:'btn btn-primary',
    style:'margin:2px',
    disable:true
  }
  logoutButton={
    name:'Logout',
    buttonClass:'btn btn-primary',
    style:'margin:2px',
    disable:true
  }
  signUpButton={
    name:'Sign Up',
    buttonClass:'btn btn-success',
    style:'margin:2px',
    disable:true
  }
}

