import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-convenios',
  templateUrl: './registro-convenios.component.html',
  styleUrls: ['./registro-convenios.component.css']
})
export class RegistroConveniosComponent implements OnInit {
  public searchCriteriaButton : boolean;
  public criteriaButton : boolean;
  constructor() { }

  ngOnInit() {
    this.searchCriteriaButton = true;
    this.criteriaButton = false;
  }

}
