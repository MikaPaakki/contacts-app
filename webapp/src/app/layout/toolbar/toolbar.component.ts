import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
