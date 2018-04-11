import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LatNavBarComponent } from './lat-nav-bar/lat-nav-bar.component';
//Services to use in this projects
import {GlobalVariableService} from '../app/services/global-variable.service';
import { BodyAppComponent } from './body-app/body-app.component';
import { HeaderAppComponent } from './header-app/header-app.component'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LatNavBarComponent,
    BodyAppComponent,
    HeaderAppComponent
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
    NgbModule.forRoot()
  ],
  providers: [
    GlobalVariableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
