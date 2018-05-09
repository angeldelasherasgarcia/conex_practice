import { SearchCriteriaAgreementsComponent } from './search-criteria-agreements/search-criteria-agreements.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-convenios',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.css']
})
export class AgreementsComponent implements OnInit {
  public searchCriteriaButton : boolean;
  public criteriaButton : boolean;
  constructor() { }

  ngOnInit() {
    this.searchCriteriaButton = true;
    this.criteriaButton = false;
  }

}
