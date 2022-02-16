import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './UI/button/button.component';
import { LoginComponent } from './SC/login/login.component';
import { TextboxComponent } from './UI/textbox/textbox.component';






@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
