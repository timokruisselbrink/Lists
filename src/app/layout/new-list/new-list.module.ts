import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewListRoutingModule } from './new-list-routing.module';
import { NewListComponent } from './new-list.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NewListRoutingModule,
    FormsModule
  ],
  declarations: [NewListComponent]
})
export class NewListModule { }
