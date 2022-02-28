import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
    


  data : any[] = [];

  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._getAllUser();
  }



  private _getAllUser() {
     this._http.get('https://reqres.in/api/users').subscribe(
       (response:any)=>{
          this.data = response.data;
       }
       
       )
  }

}