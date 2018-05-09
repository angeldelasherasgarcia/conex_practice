import { Routes, RouterModule } from '@angular/router';
import { AgreementsComponent,
         DecreesResolutionsComponent,
         ListAgreementsComponent,
         DetailAgreementComponent,
         ParcelsComponent,
         ListParcelsComponent,
         DetailsParcelsComponent,
         ListCriteriaDecreesComponent,
         DetailDecreesComponent,
         GenericWindowComponent,
         CountDownComponent
        } from "./project.pages";
const routes: Routes = [
    { path: '', component: AgreementsComponent },
    { path: 'decrees', component: DecreesResolutionsComponent },
    { path: 'list-decrees', component: ListCriteriaDecreesComponent },
    { path: 'detail-decrees', component: DetailDecreesComponent },
    { path: 'list_agreements', component: ListAgreementsComponent },
    { path: 'detail-agreement', component: DetailAgreementComponent},
    { path: 'parcels', component: ParcelsComponent },
    { path: 'list_parcels', component: ListParcelsComponent },
    { path: 'details_parcels', component: DetailsParcelsComponent },
    { path: 'generic_window', component: GenericWindowComponent },
    { path: 'count_down', component: CountDownComponent },
    { path: '**', component: AgreementsComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})
