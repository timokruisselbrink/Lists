import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListService } from 'app/layout/list/list.service';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [ListComponent],
  providers: [ ListService]
})
export class ListModule { }
