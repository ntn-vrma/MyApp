import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userStatus } from 'src/app/services/Validation/userStatus';

import { HttpClient }  from '@angular/common/http'
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userStatus=false;

  errorMessage = '';

  constructor(private _userStatus:userStatus,
    private router:Router,
    private _http: HttpClient
    ){
    this._userStatus.isValid.subscribe((res:any)=>{
      this.userStatus=res;
    })

  }

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
    disable:(this.password.valid && this.username.valid),
    buttonClass:'btn btn-primary',
    style:'width:100%; margin-top:5px; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
  }

  onSubmit(){
   
    if((this.username.isValid() && this.password.isValid()))
    {
      this._http.post('https://reqres.in/api/login',{
        "email": this.username.value,
        "password": this.password.value
    })
    .pipe(take(1))
    .subscribe( 
        (response:any)=>{
            this.errorMessage = '';
            this._userStatus.setToken(response.token);
           this.router.navigateByUrl('/dashboard')
           this._userStatus.isValid.next(true);
        }, 
        (err)=>{
            this.errorMessage = err.error.error;
        }  
    )
  }

  }
}