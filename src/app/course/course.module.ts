import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [AddEditComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
