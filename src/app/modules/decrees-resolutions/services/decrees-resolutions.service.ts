import { Injectable } from '@angular/core';
import {  LIST_DECREES,
  LISTADO_DETALLE_ENCOMIENDA} 
  from './../../../app.constants';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DecreesResolutionsService {

  constructor(public http: HttpClient) { }
  public getEncomiendaDetalle():any{
    return this.http.get(LIST_DECREES);
  }
  public getListaDetalleEncomiendas():any{
    return this.http.get(LISTADO_DETALLE_ENCOMIENDA);
  }
}
