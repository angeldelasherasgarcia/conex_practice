import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-one-button',
  templateUrl: './modal-one-button.component.html',
  styleUrls: ['./modal-one-button.component.css']
})
export class ModalOneButtonComponent implements OnInit {
  @Input() titulo;
  @Input() texto_modal;
  @Input() texto_boton;
  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log("modal")
  }

}
