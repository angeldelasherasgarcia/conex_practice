import { Routes, RouterModule } from '@angular/router';
import { AgreementsComponent,
         DecreesResolutionsComponent,
         ListAgreementsComponent,
         DetailAgreementComponent,
         ParcelsComponent
        } from "./project.pages";
const routes: Routes = [
    { path: '', component: AgreementsComponent },
    { path: 'parcels', component: ParcelsComponent },
    { path: 'decrees', component: DecreesResolutionsComponent },
    { path: 'list_agreements', component: ListAgreementsComponent },
    { path: 'detail-agreement', component: DetailAgreementComponent},
    { path: '**', component: AgreementsComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})