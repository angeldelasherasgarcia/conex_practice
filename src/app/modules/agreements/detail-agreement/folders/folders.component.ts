import { Component, OnInit, Input } from '@angular/core';
import { ConveniosService } from './../../../../services/convenios/convenios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTwoButtonComponent } from '../../../../layouts/modal-two-button/modal-two-button.component';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @Input() listDetailsAgreement: any;
  private modal: any;
  constructor(public conveniosService: ConveniosService,
    private modalService: NgbModal) { }

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
    this.modal = this.modalService.open(ModalTwoButtonComponent);
    this.modal.componentInstance.archivo = lista;
    this.modal.result.then((resultModal) => {
      if (resultModal !== '') {
        this.conveniosService.getFile().subscribe(
          result => {
            if (resultModal === 'guardar') {
              this.downLoadCurrentFile(result, lista);
            };
            if (resultModal === 'abrir') {
              this.showCurrentFile(result)
            };
          },
          error => {
            console.log(error);
          }
        )
      }
    })
  }
  /**
   * 
   * @param blob Archivo que se va a descargar
   * @description Descargar del archivo de pdf 
   */
  public downLoadCurrentFile(blob, lista): void {
    var a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = lista.name;
    a.click();
  }
  /**
   * 
   * @param blob Archivo que se va a descargar
   * @description Muestra el pdf en otra pantalla
   */
  public showCurrentFile(blob): void {
    var url = window.URL.createObjectURL(blob);
    window.location.assign(url);
  }
}
