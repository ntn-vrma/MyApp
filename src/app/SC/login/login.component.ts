import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username={
    value:'',
    placeholder:'Username',
    type:'text',
    valid:true,
    name:'username',
    msg:'',
    isValid:function(){
      let result=true
      if(this.value.trim().length<1){
        this.msg='Username is required!'
        result=false
      }
      else if(this.value.trim().length<8)
      {
        this.msg='Username must be greater than 8 characters'
        result=false
      }
      this.valid=result
      return result;
    },
    style:'width: 100%'
  };

  password={
    value:'',
    placeholder:'Password',
    type:'password',
    valid:true,
    name:'password',
    msg:'',
    isValid:function(){
      let result=true
      if(this.value.trim().length<1){
        this.msg='Password is required!'
        result=false 
      }
      else if(this.value.trim().length<8)
      {
        this.msg='Password must be greater than 8 characters'
        result=false
      }
      this.valid=result
      return result;
    },
    style:'width: 100%'
  };

  buttonSpecs={
    type:'submit',
    name:'Login',
    disable: (this.password.valid && this.username.valid),
    buttonClass:'btn btn-primary',
    style:'width:100%; margin-top:5px'
  }

  onSubmit(){
    if((this.username.isValid() && this.password.isValid()))
    {
      alert("Submitted")
    }
    else{
      alert("Please enter valid credentials!")
    }
  }
}