import { Component, OnInit } from '@angular/core';
import { DecreesResolutionsService } from '../../services/decrees-resolutions.service';
import { ConveniosService } from '../../../../services/convenios/convenios.service';
import { GlobalVariableService } from '../../../../services/global-variable.service';

@Component({
  selector: 'app-detail-decrees',
  templateUrl: './detail-decrees.component.html',
  styleUrls: ['./detail-decrees.component.css']
})
export class DetailDecreesComponent implements OnInit {
  public isSelected : String;
  public titulos = [];
  public list : any;
  public detail_decrees: any;
  constructor(public decreesService: DecreesResolutionsService,
              public conveniosService: ConveniosService,
              public globalService: GlobalVariableService) { }

  ngOnInit() {
    this.titulos = ['Decreto/resolucion', 'Archivos'];
    this.isSelected = this.titulos[0];
    this.callService();
  }
  public getOptionSelected(event): void {
    this.isSelected=event;
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
    }
  }
  public returnOption(){
    this.isSelected = this.titulos[0];
  }
  public callService(){
    this.decreesService.getListaDetalleEncomiendas().subscribe(
      result =>{
        this.list = result;
      },
      error =>{

      }
    )
    this.decreesService.getDetalleEncomiendas().subscribe(
      result=>{
        this.detail_decrees = result;
      },
      error=>{

      }
    )
  }
}
