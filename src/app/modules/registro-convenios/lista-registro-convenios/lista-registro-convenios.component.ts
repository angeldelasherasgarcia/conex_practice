import { Component, OnInit } from '@angular/core';
import { ConveniosService } from './../../../services/convenios/convenios.service';
@Component({
  selector: 'app-lista-registro-convenios',
  templateUrl: './lista-registro-convenios.component.html',
  styleUrls: ['./lista-registro-convenios.component.css']
})
export class ListaRegistroConveniosComponent implements OnInit {

  constructor(public conveniosService: ConveniosService) { }

  ngOnInit() {
   this.callService();
  }
  public callService(){
    console.log(this.conveniosService.body_search_convenio === '{}' ||this.conveniosService.body_search_convenio === undefined);
  }
}
