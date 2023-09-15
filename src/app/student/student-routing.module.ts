import { AuthGuard } from './../core/guard/auth.guard';
import { ListStudentCourseComponent } from './list-student-course/list-student-course.component';
import { AddStudentCourseComponent } from './add-student-course/add-student-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../core/components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', component: ListStudentCourseComponent },
      { path: 'add', component: AddStudentCourseComponent }      
    ],
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
