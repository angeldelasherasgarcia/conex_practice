import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecundaryNavComponent } from './secundary-nav/secundary-nav.component';
import { ModalDownloadFileComponent } from './modal-download-file/modal-download-file.component';
import { ListFolderComponent } from './list-folder/list-folder.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule} from 'ngx-pagination';
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
    NgxPaginationModule
  ],
  declarations: [
      SecundaryNavComponent,
      ModalDownloadFileComponent, 
      ListFolderComponent],
  exports:[
    SecundaryNavComponent,
    ModalDownloadFileComponent,
    ListFolderComponent
  ],
  entryComponents: [
    ModalDownloadFileComponent]
})
export class CommonsElementsModule { }
