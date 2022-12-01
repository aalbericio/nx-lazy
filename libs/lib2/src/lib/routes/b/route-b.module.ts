import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RouteBComponent } from './route-b.component';

export const routesB: Route[] = [
    { path: '', component: RouteBComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesB)
    ],
    declarations: [RouteBComponent],
})
export class RouteBModule {

}
