import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CARGA_SELECT_ENCOMIENDAS,
          LISTA_ENCOMIENDAS } 
          from './../../../app.constants';
@Injectable()
export class ParcelsService {

  constructor(public http: HttpClient) { }
  public getCargaSelectEncomiendas():any{
    return this.http.get(CARGA_SELECT_ENCOMIENDAS);
  }
  public getCargaListEncomiendas():any{
    return this.http.get(LISTA_ENCOMIENDAS);
  }
}