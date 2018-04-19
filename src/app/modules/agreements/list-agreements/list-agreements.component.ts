import { Component, OnInit } from '@angular/core';
import { ConveniosService } from './../../../services/convenios/convenios.service';
import { ListaRegistroConveniosService } from './../../../services/convenios/lista-registro-convenios.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from '../../../layouts/error/error.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-registro-convenios',
  templateUrl: './list-agreements.component.html',
  styleUrls: ['./list-agreements.component.css']
})
export class ListAgreementsComponent implements OnInit {
  public lista_registros: any = [];
  private modal: any;
  constructor(public conveniosService: ConveniosService,
              public listaConv: ListaRegistroConveniosService,
              private modalService: NgbModal,
              public router: Router) { }

  ngOnInit() {
    this.callService();
  }
  public callService() {
    if (this.conveniosService.body_search_convenio === '{}' || this.conveniosService.body_search_convenio === undefined) {
      this.listaConv.getAllRegister().subscribe(
        result => {
          this.lista_registros = result.registro_convenios;
        },
        error => {
          this.modal = this.modalService.open(ErrorComponent);
          this.modal.componentInstance.data = "Oops..... 404 error";
          this.modal.componentInstance.title_modal = "Error"
          this.modal.result.then((result) => {
          })
        })
    } else {
      this.listaConv.postAllRegister(this.conveniosService.body_search_convenio).subscribe(
        result => {
          this.lista_registros = result.registro_convenios;
        },
        error => {
          this.modal = this.modalService.open(ErrorComponent);
          this.modal.componentInstance.data = "Oops..... 404 error";
          this.modal.componentInstance.title_modal = "Error"
          this.modal.result.then((result) => {
          })
        });
    };
  }
  public showDetails(object){
    this.conveniosService.agreement_selected=object;
    this.router.navigate(['detail-agreement']);
  }
}
