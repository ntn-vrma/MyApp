import { Component,Input } from "@angular/core";

@Component({
    selector : 'user-item',
    template :     `
    <div class="card" style="width: 18rem;">
    <img [src]="user.avatar" class="card-img-top" alt="user.id">
    <div class="card-body">
      <p class="card-text">
        Name : {{user.first_name}} {{user.last_name}}
      </p>
    </div>
  </div>
    ` ,
})

export class  UserItemComponent {
    

    @Input() user : any;

}