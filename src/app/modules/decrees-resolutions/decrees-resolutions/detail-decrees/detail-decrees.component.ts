import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-decrees',
  templateUrl: './detail-decrees.component.html',
  styleUrls: ['./detail-decrees.component.css']
})
export class DetailDecreesComponent implements OnInit {
  public isSelected : String;
  public titulos = [];
  constructor() { }

  ngOnInit() {
    this.titulos = ['Decreto/resolucion', 'Archivos'];
    this.isSelected = this.titulos[0];
  }
  public getOptionSelected(event): void {
    this.isSelected=event;
  }
}
