import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class userStatus{

    isValid=new Subject<boolean>();
    
}