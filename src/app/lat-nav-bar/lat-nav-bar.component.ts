import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lat-nav-bar',
  templateUrl: './lat-nav-bar.component.html',
  styleUrls: ['./lat-nav-bar.component.css']
})
export class LatNavBarComponent implements OnInit {
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
    console.log(this.isActive)
  }
}
