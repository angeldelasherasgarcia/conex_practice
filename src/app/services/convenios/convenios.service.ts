import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from './../'
@Injectable()
export class ConveniosService {
  
  constructor(public http: HttpClient) { }
  
  public getResponsibleOrgan(){
    const apiUrl = 'http://localhost:3000/responsibe-organ';
    return this.http.get(apiUrl)
  }
  public getTipoEntidad(){
    const apiUrl = 'http://localhost:3000/tipo-entidad';
    return this.http.get(apiUrl)
  }
}
