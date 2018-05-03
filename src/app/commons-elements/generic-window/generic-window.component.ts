import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service'

@Component({
  selector: 'app-generic-window',
  templateUrl: './generic-window.component.html',
  styleUrls: ['./generic-window.component.css']
})
export class GenericWindowComponent implements OnInit {
  public ubicacion_imagen:string;
  public texto_ventana:string;
  constructor( public global: GlobalVariableService) { 
  }

  ngOnInit() {
    this.ubicacion_imagen= this.global.ubicacion_imagen;
    this.texto_ventana=this.global.text_window;
  }

}
