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
  public datails_agreement: any[];
  private modal: any;
  constructor(public conveniosService: ConveniosService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.selected_agreement = this.conveniosService.agreement_selected;
    this.callService();
  }
  public showDetails(option): void {
    this.isSelected = option;
  }
  public callService() {
    this.conveniosService.getDetailAgreement(this.selected_agreement).subscribe(
      result => {
        this.datails_agreement = result.detalle_convenios
      },
      error => {
        this.showModal()
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
}
