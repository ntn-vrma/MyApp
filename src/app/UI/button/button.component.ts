import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() title="My Button"
  @Input() className=""
  @Input() styleSpecs=""
  @Output() clicked=new EventEmitter();
  constructor() { }
  onClickHandler(){
    this.clicked.emit("clicked");
  }


}
