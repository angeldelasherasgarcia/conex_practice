import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-two-button',
  templateUrl: './modal-two-button.component.html',
  styleUrls: ['./modal-two-button.component.css']
})
export class ModalTwoButtonComponent implements OnInit {
  @Input() archivo;
 
  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
