import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  { 
    path: '', component: ListComponent,
    children: [
      { path: 'Checklist', loadChildren: './checklist/checklist.module#ChecklistModule' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
