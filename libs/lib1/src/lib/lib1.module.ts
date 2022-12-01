import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Lib1Component } from './lib1-component';

const routes: Array<Route> = [
    {
        path: 'a',
        loadChildren: () => import('./routes/a/route-a.module').then((m) => m.RouteAModule)
    },
    {
        path: 'b',
        loadChildren: () => import('./routes/b/route-b.module').then((m) => m.RouteBModule)
    },
    { path: '**', redirectTo: 'a' }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    declarations: [
        Lib1Component
    ],
    exports: [
        Lib1Component
    ]
})
export class Lib1Module {

}
