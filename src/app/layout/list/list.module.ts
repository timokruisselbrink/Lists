import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListService } from 'app/layout/list/list.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ListComponent
  ], 
  providers: [ ListService]
})
export class ListModule { }
