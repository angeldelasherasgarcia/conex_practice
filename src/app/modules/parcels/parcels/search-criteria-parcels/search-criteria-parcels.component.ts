import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-search-criteria-parcels',
  templateUrl: './search-criteria-parcels.component.html',
  styleUrls: ['./search-criteria-parcels.component.css']
})
export class SearchCriteriaParcelsComponent implements OnInit {
  public encomiendas: any;
  constructor() { }

  ngOnInit() {
    this.initObject();
  }
  searchCriteriaParcels() {
    console.log(this)
  }
  initObject() {
    this.encomiendas = {
      titulo_objeto: '',
      organo_responsable: '',
      fecha_formalizacion_desde: '',
      fecha_formalizacion_hasta: '',
      num_encomienda_0: '',
      num_encomienda_1: '',
      num_encomienda_2: '',
      num_encomienda_3: '',
      importe_gastos_desde: '',
      importe_gastos_hasta: '',
      encomendante: '',
      encomendado: '',
      tipo_aportacion: '',
      materia: ''
    };
  }
}
