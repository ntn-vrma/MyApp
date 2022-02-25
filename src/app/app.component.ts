import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userStatus } from './services/Validation/userStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  isLogin=false;
  constructor(private _loggedIn:userStatus,private router:Router){
    this._loggedIn.isValid.subscribe((res:any)=>{
      this.isLogin=res
    })
  }
  eventHandler(eve:any){
    switch(eve.type){
      case 'LOGIN':
        // this.isLogin=true  
        this.router.navigateByUrl('/login');
        break;
      case 'LOGOUT':
        this._loggedIn.isValid.next(false)
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

