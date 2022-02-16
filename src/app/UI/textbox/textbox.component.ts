import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {

  @Input() boxName=''
  @Input() textSpecs:any={};
  ngOnInit(){
    console.log(typeof(this.textSpecs))
  }
  textboxData=''
  //  @Input() ngClassName=''
   @Input() classBit:Boolean=true
  @Output() texboxEvent= new EventEmitter<string>();
  // onChange(event:any){
  //   this.texboxEvent.emit(this.textboxData);
  //   console.log(this.classBit)
  // }
}
