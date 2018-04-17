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
import { LatNavBarComponent } from './components/lat-nav-bar/lat-nav-bar.component';
//Services to use in this projects
import { GlobalVariableService } from '../app/services/global-variable.service';
import { ConveniosService } from '../app/services/convenios/convenios.service'
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { RegistroConveniosComponent } from './modules/registro-convenios/registro-convenios.component';
import { SearchCriteriaAgreementsComponent } from './modules/registro-convenios/search-criteria-agreements/search-criteria-agreements.component';
import { EncomiendasComponent } from './modules/encomiendas/encomiendas.component';
import { DecretosResolucionesComponent } from './modules/decretos-resoluciones/decretos-resoluciones.component';
import { ModalComponent } from './components/modal/modal.component';
import { ListaRegistroConveniosComponent } from './modules/registro-convenios/lista-registro-convenios/lista-registro-convenios.component'

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
    ModalComponent,
    ListaRegistroConveniosComponent
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
    ReactiveFormsModule
  ],
  providers: [
    GlobalVariableService,
    ConveniosService
  ],
  entryComponents: [
    ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
