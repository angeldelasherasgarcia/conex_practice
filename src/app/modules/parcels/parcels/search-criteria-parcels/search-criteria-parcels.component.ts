import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ParcelsService } from './../../servicios/parcels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-criteria-parcels',
  templateUrl: './search-criteria-parcels.component.html',
  styleUrls: ['./search-criteria-parcels.component.css']
})
export class SearchCriteriaParcelsComponent implements OnInit {
  public encomiendas: any;
  public organo_responsable: any;
  public materia: any;
  public tipo_aportacion:any;
  public hiddenDefault:boolean = false;
  constructor( public parcelService: ParcelsService,
               public router: Router) { }

  ngOnInit() {
    this.callService();
    this.initObject();
  }
  searchCriteriaParcels() {
    this.router.navigate(['list_parcels']);
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
  };
  hiddenDefaultOption() {
    this.hiddenDefault = true;
  }
  public callService():void{
    this.parcelService.getCargaSelectEncomiendas().subscribe(
      result =>{
        this.organo_responsable=result.organo_reponsable;
        this.materia=result.materia;
        this.tipo_aportacion = result.tipo_aprobacion;
        console.log(result)
      },
      error =>{
        console.log(error)
      }
    )
  }
}
