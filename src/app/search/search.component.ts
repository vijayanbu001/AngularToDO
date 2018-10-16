import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {
    // this.toDo={}
    this.message = 'jogging';
  }
  @Input() message: string;

  ngOnInit() {
  }

  clickMe = (v) => {
    alert(v);
  }
}
