import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes:Routes = [
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', /*:id es el valor id que le pasemos*/
        component: VerPaisComponent
    },
    {
        path: '**', //cualquier otro path
        redirectTo: ''
    } //path del home

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes) //rutas principales
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}