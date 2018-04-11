import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lat-nav-bar',
  templateUrl: './lat-nav-bar.component.html',
  styleUrls: ['./lat-nav-bar.component.css']
})
export class LatNavBarComponent implements OnInit {
  @Output() actualActionValue = new EventEmitter();
  public nombreUsuario : String;
  public centro : String;
  public isActive : String;
  
  constructor() { }

  ngOnInit() {
    this.nombreUsuario="NOMBRE USUARIO"
    this.centro= "CENTRO"
  }
  public showModel(opcion):void{
    this.isActive = opcion;
    this.actualActionValue.emit(opcion)
  }
}
