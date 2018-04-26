import { Routes, RouterModule } from '@angular/router';
import { AgreementsComponent,
         DecreesResolutionsComponent,
         ListAgreementsComponent,
         DetailAgreementComponent,
         ParcelsComponent,
         ListParcelsComponent,
         DetailsParcelsComponent
        } from "./project.pages";
const routes: Routes = [
    { path: '', component: AgreementsComponent },
    { path: 'decrees', component: DecreesResolutionsComponent },
    { path: 'list_agreements', component: ListAgreementsComponent },
    { path: 'detail-agreement', component: DetailAgreementComponent},
    { path: 'parcels', component: ParcelsComponent },
    { path: 'list_parcels', component: ListParcelsComponent },
    { path: 'details_parcels', component: DetailsParcelsComponent },
    { path: '**', component: AgreementsComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})