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

  usernameValues={
    value:'',
    placeholder:'Username',
    type:'text',
    disable:false,
    valid:true,
    name:'username',
    isValid:function(){
      let result=true
      if(this.value.trim().length<1){
        this.msg='Username is required!'
        result=false
        this.valid=result
      }
      else if(this.value.trim().length<8)
      {
        this.msg='Username must be greater than 8 characters'
        result=false
        this.valid=result
      }
      this.valid=result
      return result;
    },
    msg:''
  };
  passwordValues={
    value:'',
    placeholder:'Password',
    type:'password',
    disable:false,
    valid:true,
    name:'password',
    isValid:function(){
      let result=true
      if(this.value.trim().length<1){
        this.msg='Password is required!'
        result=false
        this.valid=result
      }
      else if(this.value.trim().length<8)
      {
        this.msg='Password must be greater than 8 characters'
        result=false
        this.valid=result
      }
      this.valid=result
      return result;
    },
    msg:''
  };
  buttonSpecs={
    type:'submit',
    name:'Login',
    disable:false,
    buttonClass:'btn btn-primary',
    style:'width:100%; margin-top:5px'
  }

  // getUsername(event:Event){
  //   this.username=(<HTMLInputElement>event.target).value;
  //   this.usernameValid= this.username.length > 0;
  // }
  // getPassword(event:Event){
  //   this.password=(<HTMLInputElement>event.target).value;
  //   this.passwordValid= this.password.length > 0;
  // }
  // isValid(){
  //   return this.password.length && this.username.length;
  // }
}