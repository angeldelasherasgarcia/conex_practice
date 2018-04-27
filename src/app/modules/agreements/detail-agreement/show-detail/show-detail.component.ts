import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  @Input() detailAgreement: any ;
  constructor() {
    this.initObject();
  }

  ngOnInit() {
  }
  initObject() {
    this.detailAgreement = {
      fecha_formalizacion: '',
      num_expediente: '',
      titulo: '',
      num_convenio: '',
      organos_firmantes: {
        firmantes: '',
        obligatorios: ''
      },
      entidades_firmantes: {
        entidad: '',
        firmates: '',
        obligados: ''
      },
      tipo_convenio: '',
      materia: '',
      anexos: '',
      vigencia: {
        desde: '',
        hasta: ''
      },
      importe: {
        ingresos: '',
        gastos: ''
      },
      prorroga: '',
      duracion: ''
    };
  }

}
