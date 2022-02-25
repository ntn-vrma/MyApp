import { NgModule } from '@angular/core';


import {components,bootstrap, imports} from './declarations'
import { userStatus } from './services/Validation/userStatus';

@NgModule({
declarations: components,
  imports: imports,
  providers: [userStatus],
  bootstrap: bootstrap
})
export class AppModule { }
