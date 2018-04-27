import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria-decrees',
  templateUrl: './search-criteria-decrees.component.html',
  styleUrls: ['./search-criteria-decrees.component.css']
})
export class SearchCriteriaDecreesComponent implements OnInit {
  public decretos:any;
  public organosResponsables:any;
  public hiddenDefault:boolean = false;
  constructor(public router: Router) {
    this.organosResponsables =[
      'SGts',
      'Distritos',
      'OO.AA'
    ];
  }

  ngOnInit() {
    this.initObject();
  }
  initObject() {
    this.decretos = {
      titulo: '',
      organo_responsable: 'Selecione',
      organo_resolucion: 'Selecione',
      fecha_aportacion_desde: '',
      fecha_aportacion_hasta: '',
      num_decreto_0: '',
      num_decreto_1: '',
      num_expediente: '',
      razon_social: ''
    };
  };
  public searchCriteriaDecrees():void{
    this.router.navigate(['list-decrees']);
  }
  public hiddenDefaultOption():void{
    this.hiddenDefault = true;
  }
}