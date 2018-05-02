import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
/**
 * OrderPipe
 * @class 
 * @description Tubería para ordenar elementos de un array
 */
export class OrderPipe implements PipeTransform {

  /**
   * @function transform
   * @param array : Array a ordenar
   * @param orderBy : Parametro por el que ordenar
   * @param asc : Indica si es ascendente o descentende
   * @param currentDateTime : Parámetro cualquiera para forzar la recarga del pipe
   * @description Cambia el array en función de los parametros que reciba
   */
  transform(array, orderBy, asc = true, currentDatetime: Date) {
    if (!orderBy || orderBy.trim() == "") {
      return array;
    }
    //Ascendente
    if (asc) {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item1[orderBy], item2[orderBy]);
      });
    }
    else {
      //!Ascendente
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item2[orderBy], item1[orderBy]);
      });
    }
  }

  /**
   * @function orderByComparator
   * @param a 
   * @param b 
   * @description Para 2 parametros a y b decide cual ha de ir antes y cual despues
   */
  orderByComparator(a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      //Entra si no es un número y comprueba por letras
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
    }
    else {
      //Parsea los strings como números para comprobarlos bien
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }
    return 0; //son iguales
  }

}
