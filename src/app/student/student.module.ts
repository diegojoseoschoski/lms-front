import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentCourseComponent } from './list-student-course/list-student-course.component';
import { AddStudentCourseComponent } from './add-student-course/add-student-course.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ListStudentCourseComponent, AddStudentCourseComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class StudentModule { }
