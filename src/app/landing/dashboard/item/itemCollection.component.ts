import { Component, Input } from "@angular/core";

@Component({
     selector : 'user-collection',
     template : `
         <div *ngFor="let item of collection"> 
            <user-item [user]="item"></user-item>
         </div>
     `
})

export class  UserCollectionComponent {
    
    @Input() collection : any[] = [];
}