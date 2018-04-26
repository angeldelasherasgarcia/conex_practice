import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDownloadFileComponent } from '../modal-download-file/modal-download-file.component';

@Component({
  selector: 'app-list-folder',
  templateUrl: './list-folder.component.html',
  styleUrls: ['./list-folder.component.css']
})
export class ListFolderComponent implements OnInit {
  @Output() resultModal = new EventEmitter();
  @Input() listDetailsAgreement: any;
  public pagination: any;
  private modal: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  /**
   * @description Funcion que se llama al pulsar el icono del pdf
   * en la tabla. 
   * Se llevan a cabo las siguientes acciones :
   * 1. Se abre el modal donde el usuario puede eleguir la acción a realizar.
   * 2. Si la acción es guardar o mostrar , se llama al servicio de descarga del pdf.
   * 3. Una vez llamado al servicio se muestra o se descarga el pdf en función del
   * boton que el usuario haya pulsado en el modal.
   */
  public downloadFile(lista): any {
    this.modal = this.modalService.open(ModalDownloadFileComponent);
    this.modal.componentInstance.archivo = lista;
    this.modal.result.then((resultModal) => {
      this.resultModal.emit(lista.name+"++"+resultModal);
      },
      error => {
    })
  }
}
