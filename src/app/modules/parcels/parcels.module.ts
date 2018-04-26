import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsComponent } from './parcels/parcels.component';
import { SearchCriteriaParcelsComponent } from './parcels/search-criteria-parcels/search-criteria-parcels.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelsService } from './servicios/parcels.service';
import { ListParcelsComponent } from './parcels/list-parcels/list-parcels.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { DetailsParcelsComponent } from './parcels/details-parcels/details-parcels.component';
import { CommonsElementsModule } from '../../commons-elements/commons-elements.module';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonsElementsModule
  ],
  declarations: [
    ParcelsComponent,
    SearchCriteriaParcelsComponent,
    ListParcelsComponent,
    DetailsParcelsComponent
  ],
  providers: [
    ParcelsService
  ],
  exports: [
    ParcelsComponent
  ]
})
export class ParcelsModule { }
