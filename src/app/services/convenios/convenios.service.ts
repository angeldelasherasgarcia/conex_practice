import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CARGA_SELECT} from './../../app.constants';
@Injectable()
export class ConveniosService {
  public body_search_convenio: any;
  constructor(public http: HttpClient) { }
  public getCargaSelect(): Observable<any> {
    const apiUrl = CARGA_SELECT;
    return this.http.get(apiUrl)
  }
  /**
   * @description Mapeo de datos recibidos del formulario
   * @param seachCriteria 
   * @returns Devuelve un objeto convertido a json
   */
  public searchConvenio(seachCriteria: any) {
    let body = JSON.stringify({
      desde_description_organo: seachCriteria.desde_description_organo !== '' ? seachCriteria.desde_description_organo : this.isEmpty(),
      desde_importe_gastos: seachCriteria.desde_importe_gastos !== '' ? seachCriteria.desde_importe_gastos : this.isEmpty(),
      desde_importe_ingresos: seachCriteria.desde_importe_ingresos !== '' ? seachCriteria.desde_importe_ingresos : this.isEmpty(),
      entidades_firmantes: seachCriteria.entidades_firmantes !== '' ? seachCriteria.entidades_firmantes : this.isEmpty(),
      hasta_description_organo: seachCriteria.hasta_description_organo !== '' ? seachCriteria.hasta_description_organo : this.isEmpty(),
      hasta_importe_gastos: seachCriteria.hasta_importe_gastos !== '' ? seachCriteria.hasta_importe_gastos : this.isEmpty(),
      hasta_importe_ingresos: seachCriteria.hasta_importe_ingresos !== '' ? seachCriteria.hasta_importe_ingresos : this.isEmpty(),
      materia: seachCriteria.materia !== '' ? seachCriteria.materia : this.isEmpty(),
      num_convenio_1: seachCriteria.num_convenio_1 !== '' ? seachCriteria.num_convenio_1 : this.isEmpty(),
      num_convenio_2: seachCriteria.num_convenio_2 !== '' ? seachCriteria.num_convenio_2 : this.isEmpty(),
      num_convenio_3: seachCriteria.num_convenio_3 !== '' ? seachCriteria.num_convenio_3 : this.isEmpty(),
      num_convenio_4: seachCriteria.num_convenio_4 !== '' ? seachCriteria.num_convenio_4 : this.isEmpty(),
      organo_responsable: seachCriteria.organo_responsable !== '' ? seachCriteria.organo_responsable : this.isEmpty(),
      organos_firmantes: seachCriteria.organos_firmantes !== '' ? seachCriteria.organos_firmantes : this.isEmpty(),
      tipo_convenio: seachCriteria.tipo_convenio !== '' ? seachCriteria.tipo_convenio : this.isEmpty(),
      tipo_entidades: seachCriteria.tipo_entidades !== '' ? seachCriteria.tipo_entidades : this.isEmpty(),
      titulo: seachCriteria.titulo !== '' ? seachCriteria.titulo: this.isEmpty()
    });
    this.body_search_convenio = body;
  }
  /**
   * @description: Metodo para No enviar ningun valor sino recibimos nada del formulario
   */
  public isEmpty() {
  }
}
