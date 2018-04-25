import { Component, OnInit } from '@angular/core';
import { ConveniosService } from './../../../services/convenios/convenios.service';
import { ErrorComponent } from '../../../layouts/error/error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-detalle-convenio',
  templateUrl: './detail-agreement.component.html',
  styleUrls: ['./detail-agreement.component.css']
})
export class DetailAgreementComponent implements OnInit {
  public isSelected: string = 'convenios';
  public selected_agreement: any[];
  public details_agreement: any[];
  public list_details_agreement:any[];
  public list_related:any[];
  private modal: any;
  constructor(public conveniosService: ConveniosService,
    private modalService: NgbModal) {
      
     }

  ngOnInit() {
    this.callService();
    this.selected_agreement = this.conveniosService.agreement_selected;
  }
  public showDetails(option): void {
    this.isSelected = option;
  }
  public callService() {
    this.conveniosService.getDetailAgreement(this.selected_agreement).subscribe(
      result => {
        this.details_agreement = result.detalle_convenios
      },
      error => {
        this.showModal()
      }
    )
    this.conveniosService.getListDetailAgreement().subscribe(
      result =>{
         this.list_details_agreement=result
      },
      error =>{
        this.showModal()
      }
    )
    this.conveniosService.getListRealted().subscribe(
      result =>{
        this.list_related = result
      },
      error =>{
        this.showModal();
      }
    )
  }
  public showModal() {
    this.modal = this.modalService.open(ErrorComponent);
    this.modal.componentInstance.data = "Oops..... 404 error";
    this.modal.componentInstance.title_modal = "Error"
    this.modal.result.then((result) => {
    })
  }
  public returnOption(){
    if(this.isSelected==='archivos'){
      this.isSelected = 'convenios'
    }else{
      this.isSelected = 'archivos'
    }
  }
}
