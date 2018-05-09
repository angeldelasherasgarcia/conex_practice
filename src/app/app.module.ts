import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelsModule} from './modules/parcels/parcels.module';
import { DecreesResolutionsModule } from './modules/decrees-resolutions/decrees-resolutions.module'
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
import { AgreementsComponent } from './modules/agreements/agreements.component';
import { SearchCriteriaAgreementsComponent } from './modules/agreements/search-criteria-agreements/search-criteria-agreements.component';
import { ListAgreementsComponent } from './modules/agreements/list-agreements/list-agreements.component'
import { DetailAgreementComponent } from './modules/agreements/detail-agreement/detail-agreement.component';
import { ErrorComponent } from './layouts/error/error.component';
import { ShowDetailComponent } from './modules/agreements/detail-agreement/show-detail/show-detail.component';
import { FoldersComponent } from './modules/agreements/detail-agreement/folders/folders.component';
import { RelatedComponent } from './modules/agreements/detail-agreement/related/related.component';
import { ModalTwoButtonComponent } from './layouts/modal-two-button/modal-two-button.component';
import { CountDownComponent } from './modules/count-down/count-down/count-down.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LatNavBarComponent,
    HeaderAppComponent,
    AgreementsComponent,
    SearchCriteriaAgreementsComponent,
    ErrorComponent,
    ListAgreementsComponent,
    DetailAgreementComponent,
    ShowDetailComponent,
    FoldersComponent,
    RelatedComponent,
    ModalTwoButtonComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    ParcelsModule,
    DecreesResolutionsModule,
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
    ErrorComponent,
    ModalTwoButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
