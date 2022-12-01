import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RouteAComponent } from './route-a.component';

export const routesA: Route[] = [
    { path: '', component: RouteAComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesA)
    ],
    declarations: [RouteAComponent],
})
export class RouteAModule {

}
