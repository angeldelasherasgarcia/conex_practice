import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsComponent } from './parcels/parcels.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ParcelsComponent
  ],
  exports: [
    ParcelsComponent
  ]
})
export class ParcelsModule { }
