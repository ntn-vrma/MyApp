import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    @Input() isLogin=false;
    @Output() headerEvent =new EventEmitter();
    onLogin(eve:any){
        this.headerEvent.emit({
            type:'LOGIN',
            value:true
        })
    }
    onLogout(eve:any){
        this.headerEvent.emit({
            type:'LOGOUT',
            value: false
        })
    }
    onSignUp(eve:any){
        this.headerEvent.emit({
            type:'SIGNUP',
            value: false
        })
    }
    loginButton={
        buttonClass:'btn btn-primary',
        style:'margin:2px',
        disable:true
      }
      logoutButton={
        buttonClass:'btn btn-primary',
        style:'margin:2px',
        disable:true
      }
      signUpButton={
        buttonClass:'btn btn-success',
        style:'margin:2px',
        disable:true
      }
      searchBox={
        placeholder:'Search..',
        style: 'width:50%;height:100%;margin-top:5px',
      }
}