import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() myInput: any;

  @Output() freezedNumber = new EventEmitter<number>()

  onEmit(){
    this.freezedNumber
  }

}
