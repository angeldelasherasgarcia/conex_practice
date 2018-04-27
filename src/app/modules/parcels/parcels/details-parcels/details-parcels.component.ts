import { Component, OnInit } from '@angular/core';
import { ParcelsService } from './../../servicios/parcels.service';
import { FoldersComponent } from './../../../agreements/detail-agreement/folders/folders.component'
import { ConveniosService } from '../../../../services/convenios/convenios.service';
import { GlobalVariableService } from '../../../../services/global-variable.service';
@Component({
  selector: 'app-details-parcels',
  templateUrl: './details-parcels.component.html',
  styleUrls: ['./details-parcels.component.css']
})
export class DetailsParcelsComponent implements OnInit {
  public isSelected: string = 'convenios';
  public list_details_agreement: any[];
  public list_realted: any[];
  public detail_parcel:any[];
  public titulos = [];
  constructor(public parcelsService: ParcelsService,
    public conveniosService: ConveniosService,
    public globalService: GlobalVariableService) { }

  ngOnInit() {
    this.callService();
    this.titulos = ['Encomiendas', 'Archivos', 'Relacionados'];
    this.isSelected = this.titulos[0];
  }
  public callService() {
    this.parcelsService.getListaDetalleEncomiendas().subscribe(
      result => {
        this.list_details_agreement = result
      },
      error => {

      }
    );
    this.parcelsService.getListaDetalleEncomiendas().subscribe(
      result => {
        this.list_realted = result;
      },
      error => {

      })
      this.parcelsService.getEncomiendaDetalle().subscribe(
        result =>{
          this.detail_parcel = result;
        }
      )
  }
  public getResultModal(event): void {
    var separador = "++";
    var resultOfModal = event.split(separador);
    if (resultOfModal[1] !== 'cerrar') {
      this.conveniosService.getFile().subscribe(
        result => {
          if (resultOfModal[1] === 'guardar') {
            this.globalService.downLoadCurrentFile(result, resultOfModal[0])
          } else {
            this.globalService.showCurrentFile(result);
          }
        }
      )
    };
  }
  public getOptionSelected(event): void {
    this.isSelected = event;
  }
}
