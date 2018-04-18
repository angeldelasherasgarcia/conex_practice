import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lat-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class LatNavBarComponent implements OnInit {
  public nombreUsuario : String;
  public centro : String;
  public isActive : String = 'convenios';
  constructor() { }
  ngOnInit() {
    this.nombreUsuario="NOMBRE USUARIO"
    this.centro= "CENTRO"
  }
  public showModel(model):void{
    this.isActive = model;
  }
}
