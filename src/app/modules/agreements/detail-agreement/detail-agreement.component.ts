import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-convenio',
  templateUrl: './detail-agreement.component.html',
  styleUrls: ['./detail-agreement.component.css']
})
export class DetailAgreementComponent implements OnInit {
  public isSelected: string = 'convenios';
  constructor() { }

  ngOnInit() {
  }
  public showDetails(option): void {
    this.isSelected = option;
  }
}
