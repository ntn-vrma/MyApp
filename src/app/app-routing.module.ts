import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, DashboardComponent, ProductsComponent, TeamsComponent } from './landing';
import { LoginComponent } from './SC/login/login.component';

const routes: Routes = [
  { path:'about',component: AboutComponent },
  { path:'products',component:ProductsComponent  },
  { path:'dashboard',component:DashboardComponent },
  { path:'teams',component:TeamsComponent  },
  { path:'login',component:LoginComponent },
  {
    path : 'list' , component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
