import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-download-file',
  templateUrl: './modal-download-file.component.html',
  styleUrls: ['./modal-download-file.component.css']
})
export class ModalDownloadFileComponent implements OnInit {
  @Input() archivo;
  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
