import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecreesResolutionsComponent } from './decrees-resolutions/decrees-resolutions.component';
import { SearchCriteriaDecreesComponent } from './decrees-resolutions/search-criteria-decrees/search-criteria-decrees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { ListCriteriaDecreesComponent } from './decrees-resolutions/list-criteria-decrees/list-criteria-decrees.component';
import { DecreesResolutionsService } from './services/decrees-resolutions.service';
import { DetailDecreesComponent } from './decrees-resolutions/detail-decrees/detail-decrees.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    DecreesResolutionsComponent, 
    SearchCriteriaDecreesComponent, 
    ListCriteriaDecreesComponent, DetailDecreesComponent
  ],
  providers:[
    DecreesResolutionsService
  ]
})
export class DecreesResolutionsModule { }
