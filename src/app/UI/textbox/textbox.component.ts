import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {

  @Input() boxName=''
  @Input() type=''
  textboxData=''
  //  @Input() ngClassName=''
   @Input() classBit:Boolean=true
  @Output() texboxEvent= new EventEmitter<string>();
  onChange(event:any){
    this.texboxEvent.emit(this.textboxData);
    console.log(this.classBit)
  }
}
