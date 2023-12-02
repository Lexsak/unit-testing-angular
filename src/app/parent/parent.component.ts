import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  message = 'Hello';
  number = 1;

  ngOnInit(): void {
    setInterval(() => {
      ++this.number;
    }, 1000);
  }
}
