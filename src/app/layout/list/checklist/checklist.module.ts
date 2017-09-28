import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist.component';

@NgModule({
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    FormsModule
  ],
  declarations: [ChecklistComponent]
})
export class ChecklistModule { }
