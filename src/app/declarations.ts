import { ButtonComponent, LinksComponent, TextboxComponent, HeaderComponent } from './UI';
import { AboutComponent, TeamsComponent, ProductsComponent, DashboardComponent} from './landing';
import { LoginComponent } from './SC/login/login.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserCollectionComponent } from './landing/dashboard/item/itemCollection.component';
import { UserItemComponent } from './landing/dashboard/item/item.component';




export const components=[
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    LoginComponent,
    HeaderComponent,
    LinksComponent,
    AboutComponent,
    TeamsComponent,
    DashboardComponent,
    ProductsComponent,
    UserCollectionComponent,
    UserItemComponent
]

export const imports=[
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
]
export const bootstrap= [AppComponent]