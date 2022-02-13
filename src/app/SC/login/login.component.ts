import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
  errorMessage=""
  usernameValid=false;
  passwordValid=false;
  constructor() { }
  getUsername(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
  }
  getPassword(event:Event){
    this.password=(<HTMLInputElement>event.target).value;
  }
  isFieldPasswordValid(){
    this.passwordValid= this.password.length > 0;
    return this.passwordValid;
  }
  isFieldUsernameValid(){
    this.usernameValid= this.username.length > 0;
    return this.usernameValid;
  }
  isValid(){
    return this.password.length && this.username.length;
  }

 
}
