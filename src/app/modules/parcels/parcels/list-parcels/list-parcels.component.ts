import { Component, OnInit } from '@angular/core';
import { ParcelsService } from './../../servicios/parcels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-parcels',
  templateUrl: './list-parcels.component.html',
  styleUrls: ['./list-parcels.component.css']
})
export class ListParcelsComponent implements OnInit {
  public pagination: any;
  public list_encomiendas : any;
  constructor(public parcelService: ParcelsService,
    public router: Router) { }

  ngOnInit() {
    this.callService();
  }
  public showDetails(lista):void{
    this.router.navigate(['details_parcels']);
  }
  public callService():void{
    this.parcelService.getCargaListEncomiendas().subscribe(
      result =>{
        this.list_encomiendas=result;
      },
      error =>{
      }
    )
  }
}
