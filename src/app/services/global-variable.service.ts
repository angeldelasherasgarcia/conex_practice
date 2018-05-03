import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
   public currentShowPage : String;
   public text_window:string;
   public ubicacion_imagen:string;
  constructor() { }
  /**
   * 
   * @param blob Archivo que se va a descargar
   * @description Descargar del archivo de pdf 
   */
  public downLoadCurrentFile(blob, name): void {
    var a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
  }
  /**
   * 
   * @param blob Archivo que se va a descargar
   * @description Muestra el pdf en otra pantalla
   */
  public showCurrentFile(blob): void {
    var url = window.URL.createObjectURL(blob);
    window.location.assign(url);
  }
}
