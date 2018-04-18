import { Routes, RouterModule } from '@angular/router';
import { AgreementsComponent,
         EncomiendasComponent,
         DecretosResolucionesComponent,
         ListAgreementsComponent,
         DetailAgreementComponent
        } from "./project.pages";
const routes: Routes = [
    { path: '', component: AgreementsComponent },
    { path: 'encomiendas', component: EncomiendasComponent },
    { path: 'decretos', component: DecretosResolucionesComponent },
    { path: 'list_agreements', component: ListAgreementsComponent },
    { path: 'detail-agreement', component: DetailAgreementComponent},
    { path: '**', component: AgreementsComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})