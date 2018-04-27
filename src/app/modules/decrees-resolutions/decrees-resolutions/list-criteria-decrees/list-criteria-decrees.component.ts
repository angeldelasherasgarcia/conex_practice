import { Component, OnInit } from '@angular/core';
import { DecreesResolutionsService } from './../../services/decrees-resolutions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-criteria-decrees',
  templateUrl: './list-criteria-decrees.component.html',
  styleUrls: ['./list-criteria-decrees.component.css']
})
export class ListCriteriaDecreesComponent implements OnInit {
  public list_decretos:any;
  constructor(public decreesService: DecreesResolutionsService,
              public router: Router) { }

  ngOnInit() {
    this.callService();
  }
  public callService(){
    this.decreesService.getEncomiendaDetalle().subscribe(
      result =>{
        this.list_decretos = result;
      },
      error =>{

      }
    )
  }
  public showDetails(lista):void{
    this.router.navigate(['detail-decrees']);
  }
}
