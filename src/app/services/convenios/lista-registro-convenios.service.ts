import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListaRegistroConveniosService {

  constructor(public http: HttpClient) { }
  public getAllRegister(): Observable<any> {
    const apiUrl = './assets/data/lista_convenios.json';
    return this.http.get(apiUrl)
  }
  public postAllRegister(params): Observable<any> {
    const apiUrl = './assets/data/lista_convenios_search.json';
    return this.http.get(apiUrl)
    //return this.http.post(apiUrl, params);
  }
}
