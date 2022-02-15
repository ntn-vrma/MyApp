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
  usernameValid=true;
  passwordValid=true;
  constructor() { }

  getUsername(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
    this.usernameValid= this.username.length > 0;
  }
  getPassword(event:Event){
    this.password=(<HTMLInputElement>event.target).value;
    this.passwordValid= this.password.length > 0;
  }
  isValid(){
    return this.password.length && this.username.length;
  }
}