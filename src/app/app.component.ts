import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  isLogin=false;
  eventHandler(eve:any){
    switch(eve.type){
      case 'LOGIN':
        this.isLogin=true  
        break;
      case 'LOGOUT':
        this.isLogin=false  
        break;
      case 'SIGNUP':
        this.isLogin=true
        break;
    }
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

