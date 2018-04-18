import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule} from 'ngx-pagination';
import { LatNavBarComponent } from './layouts/nav-bar/nav-bar.component';
//Services to use in this projects
import { GlobalVariableService } from '../app/services/global-variable.service';
import { ConveniosService } from '../app/services/convenios/convenios.service';
import { ListaRegistroConveniosService } from '../app/services/convenios/lista-registro-convenios.service';
//Components
import { HeaderAppComponent } from './layouts/header/header.component';
import { RegistroConveniosComponent } from './modules/registro-convenios/registro-convenios.component';
import { SearchCriteriaAgreementsComponent } from './modules/registro-convenios/search-criteria-agreements/search-criteria-agreements.component';
import { EncomiendasComponent } from './modules/encomiendas/encomiendas.component';
import { DecretosResolucionesComponent } from './modules/decretos-resoluciones/decretos-resoluciones.component';
import { ListaRegistroConveniosComponent } from './modules/registro-convenios/lista-registro-convenios/lista-registro-convenios.component'
import { DetalleConvenioComponent } from './modules/registro-convenios/detalle-convenio/detalle-convenio.component';
import { ErrorComponent } from './layouts/error/error.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LatNavBarComponent,
    HeaderAppComponent,
    RegistroConveniosComponent,
    SearchCriteriaAgreementsComponent,
    EncomiendasComponent,
    DecretosResolucionesComponent,
    ErrorComponent,
    ListaRegistroConveniosComponent,
    DetalleConvenioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    GlobalVariableService,
    ConveniosService,
    ListaRegistroConveniosService
  ],
  entryComponents: [
    ErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
