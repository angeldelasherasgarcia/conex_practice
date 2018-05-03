import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-two-button',
  templateUrl: './modal-two-button.component.html',
  styleUrls: ['./modal-two-button.component.css']
})
export class ModalTwoButtonComponent implements OnInit {
  @Input() titulo;
  @Input() texto_modal;
  @Input() texto_boton1;
  @Input() texto_boton2;
  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
