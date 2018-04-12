import { Routes, RouterModule } from '@angular/router';
import { RegistroConveniosComponent,
         EncomiendasComponent,
         DecretosResolucionesComponent
        } from "./project.pages";
const routes: Routes = [
    { path: '', component: RegistroConveniosComponent },
    { path: 'encomiendas', component: EncomiendasComponent },
    { path: 'decretos', component: DecretosResolucionesComponent },
    { path: '**', component: RegistroConveniosComponent }
];
export const app_routing = RouterModule.forRoot(routes, {useHash:true})