import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOneButtonComponent } from '../../../../commons-elements/modal-one-button/modal-one-button.component';
import { ModalTwoButtonComponent } from '../../../../commons-elements/modal-two-button/modal-two-button.component';
import { GlobalVariableService } from '../../../../services/global-variable.service';
@Component({
  selector: 'app-search-criteria-decrees',
  templateUrl: './search-criteria-decrees.component.html',
  styleUrls: ['./search-criteria-decrees.component.css']
})
export class SearchCriteriaDecreesComponent implements OnInit {
  public decretos:any;
  public organosResponsables:any;
  public hiddenDefault:boolean = false;
  private modal: any;
  constructor(public router: Router,
              private modalService: NgbModal,
              private global: GlobalVariableService) {
    this.organosResponsables =[
      'SGts',
      'Distritos',
      'OO.AA'
    ];
  }

  ngOnInit() {
    this.initObject();
  }
  initObject() {
    this.decretos = {
      titulo: '',
      organo_responsable: 'Selecione',
      organo_resolucion: 'Selecione',
      fecha_aportacion_desde: '',
      fecha_aportacion_hasta: '',
      num_decreto_0: '',
      num_decreto_1: '',
      num_expediente: '',
      razon_social: ''
    };
  };
  public searchCriteriaDecrees():void{
    this.router.navigate(['list-decrees']);
  }
  public hiddenDefaultOption():void{
    this.hiddenDefault = true;
  }
  public pruebaModal():void{
    this.modal = this.modalService.open(ModalTwoButtonComponent);
    this.modal.componentInstance.titulo = "Ejemplo titulo";
    this.modal.componentInstance.texto_modal = "Ejemplo texto_modal";
    this.modal.componentInstance.texto_boton1 = "Cerrar";
    this.modal.componentInstance.texto_boton2 = "Abrir";
    this.modal.result.then((resultModal) => {
      console.log("El resultado del modal es "+ resultModal);
    })
  }

  public pruebaVentanaGenerica():void{
    this.global.text_window="Ejemplo texto";
    this.global.ubicacion_imagen="../../../assets/images/pdf_icono.ico";
    this.router.navigate(['generic_window']);
  }
}
