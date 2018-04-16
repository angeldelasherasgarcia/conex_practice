import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { RegistroConvenios } from './../../../models/convenios.model';
import { Router } from '@angular/router';
import { ConveniosService } from './../../../services/convenios/convenios.service';
@Component({
  selector: 'app-search-criteria-agreements',
  templateUrl: './search-criteria-agreements.component.html',
  styleUrls: ['./search-criteria-agreements.component.css']
})
export class SearchCriteriaAgreementsComponent implements OnInit {
  formpro: FormGroup;
  public convenio: RegistroConvenios;
  public organoRespnsable: any = [];
  public tipoEntidad: any = [];
  public tipoConvenio: any = []
  public hiddenOrgano: boolean = false;
  //si es numerico iniciarlo como null
  constructor(private convenioForm: FormBuilder,
    public router: Router,
    public conveniosService: ConveniosService) {
  }

  ngOnInit() {
    this.initObject();
    this.callServices();
  }

  searchCriteria() {
    this.router.navigate(['decretos'])
  }
  saveConvenio(): any {
    const saveConvenio = {
      titulo: this.formpro.get('titulo').value,
      organo_responsable: this.formpro.get('organo_responsable').value,
      desde_description_organo: this.formpro.get('desde_description_organo').value,
      hasta_description_organo: this.formpro.get('hasta_description_organo').value,
      num_convenio_1: this.formpro.get('num_convenio_1').value,
      num_convenio_2: this.formpro.get('num_convenio_2').value,
      num_convenio_3: this.formpro.get('num_convenio_3').value,
      num_convenio_4: this.formpro.get('num_convenio_4').value,
      desde_importe_gastos: this.formpro.get('desde_importe_gastos').value,
      hasta_importe_gastos: this.formpro.get('hasta_importe_gastos').value,
      desde_importe_ingresos: this.formpro.get('desde_importe_ingresos').value,
      hasta_importe_ingresos: this.formpro.get('hasta_importe_ingresos').value,
      organos_firmantes: this.formpro.get('organos_firmantes').value,
      entidades_firmantes: this.formpro.get('entidades_firmantes').value,
      tipo_entidades: this.formpro.get('tipo_entidades').value,
      tipo_convenio: this.formpro.get('tipo_convenio').value,
      materia: this.formpro.get('materia').value
    }
    return saveConvenio;
  }
  hiddenDefaultOption(){
    this.hiddenOrgano = true;
  }
  initObject(){
    this.convenio = {
      titulo: '',
      organo_responsable: '',
      desde_description_organo: '',
      hasta_description_organo: '',
      num_convenio_1: '',
      num_convenio_2: '',
      num_convenio_3: '',
      num_convenio_4: '',
      desde_importe_gastos: '',
      hasta_importe_gastos: '',
      desde_importe_ingresos: '',
      hasta_importe_ingresos: '',
      organos_firmantes: '',
      entidades_firmantes: '',
      tipo_entidades: '',
      tipo_convenio: '',
      materia: ''
    };
  }
  callServices(){
    this.conveniosService.getCargaSelect().subscribe(
      result =>{
        this.tipoConvenio = result.tipoConvenio
        this.tipoEntidad = result.tipoEntidad;
        this.organoRespnsable = result.responsibe;
      },
      error =>{
        console.log(error)
      }
    )
  }
}
