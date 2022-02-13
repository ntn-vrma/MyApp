import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {

  @Input() boxName=''
  @Input() type=''
  texboxData=''
  //  @Input() ngClassName=''
  // @Input() classBit=false
  @Output() texboxEvent= new EventEmitter<string>();
  onChange(event:any){
    this.texboxEvent.emit(this.texboxData);
    
  }
}
