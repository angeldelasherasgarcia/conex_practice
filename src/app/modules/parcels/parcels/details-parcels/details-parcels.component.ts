import { Component, OnInit } from '@angular/core';
import { ParcelsService } from './../../servicios/parcels.service';
import {FoldersComponent} from './../../../agreements/detail-agreement/folders/folders.component'
import { ConveniosService } from '../../../../services/convenios/convenios.service';
import { GlobalVariableService } from '../../../../services/global-variable.service';
@Component({
  selector: 'app-details-parcels',
  templateUrl: './details-parcels.component.html',
  styleUrls: ['./details-parcels.component.css']
})
export class DetailsParcelsComponent implements OnInit {
  public isSelected: string = 'convenios';
  public list_details_agreement:any[];
  constructor(public parcelsService:ParcelsService,
              public conveniosService: ConveniosService,
              public globalService: GlobalVariableService) { }

  ngOnInit( ) {
    this.callService();
  }
  public showDetails(option): void {
    this.isSelected = option;
  }
  public callService(){
    this.parcelsService.getListaDetalleEncomiendas().subscribe(
      result=>{
        this.list_details_agreement=result
      },
      error =>{

      }
    )
  }
  public getResultModal(event):void{
    var separador = "++";
    var resultOfModal = event.split(separador);
    if(resultOfModal[0]!==''){
      this.conveniosService.getFile().subscribe(
        result=>{
          if(resultOfModal[1]==='guardar'){
            this.globalService.downLoadCurrentFile(result,resultOfModal[0])
          }else{
            this.globalService.showCurrentFile(result);
          }
        }
      )
    };
    
  }
}
