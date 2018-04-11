import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-app',
  templateUrl: './body-app.component.html',
  styleUrls: ['./body-app.component.css']
})
export class BodyAppComponent implements OnInit {
  public searchType : String;
  constructor() { }

  ngOnInit() {
  }
  getAction(type){
    this.searchType=type;
  }
}
