import { ButtonComponent, LinksComponent, TextboxComponent, HeaderComponent } from './UI';
import { AboutComponent, TeamsComponent, ProductsComponent, DashboardComponent} from './landing';
import { LoginComponent } from './SC/login/login.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';




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
    ProductsComponent
]

export const imports=[
    BrowserModule,
    AppRoutingModule,
    FormsModule
]
export const bootstrap= [AppComponent]