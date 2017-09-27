import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'new-list', loadChildren: './new-list/new-list.module#NewListModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'list/:type/:id', loadChildren: './list/list.module#ListModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
