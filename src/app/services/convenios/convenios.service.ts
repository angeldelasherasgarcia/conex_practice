import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { } from './../'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ConveniosService {

  constructor(public http: HttpClient) { }
  public getCargaSelect(): Observable<any> {
    //const apiUrl = 'http://localhost:3000/responsibe-organ';
    const apiUrl = './assets/data/carga-select.json';
    return this.http.get(apiUrl)
  }
}
