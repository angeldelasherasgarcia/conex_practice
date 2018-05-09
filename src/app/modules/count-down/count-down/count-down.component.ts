import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  public fecha : Date;
  public dias:any;
  public horas:any;
  public minutos:any;
  public segundos:any;
  public fecha_value:string;
  constructor() { }

  ngOnInit() {;
    this.fecha = new Date(
      2019,3,27,0,0,0,0
    )
    let timer = Observable.timer(1000,1000);
    timer.subscribe(t=>{
      this.countdown();
      console.log('a')
    });
  }
  public countdown():void{
    //var fecha=new Date('2012','1','10','21','00','00')
    var hoy=new Date()
    if (this.fecha>hoy){
        var diferencia=(this.fecha.getTime()-hoy.getTime())/1000
        this.dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*this.dias)
        this.horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*this.horas)
        this.minutos=Math.floor(diferencia/60)
        diferencia=diferencia-(60*this.minutos)
        this.segundos=Math.floor(diferencia)

        this.fecha_value='Quedan ' + this.dias + ' Días, ' + this.horas + ' Horas, ' + this.minutos + ' Minutos, ' + this.segundos + ' Segundos'
    }
    else{
      this.fecha_value='Quedan ' + this.dias + ' D&iacute;as, ' + this.horas + ' Horas, ' + this.minutos + ' Minutos, ' + this.segundos + ' Segundos'
    }
}
}
