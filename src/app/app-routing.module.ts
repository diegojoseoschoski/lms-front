
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const signUpModule = () => import('./signup/signup.module').then(x => x.SignupModule);
const courseModule = () => import('./course/course.module').then(x => x.CourseModule);
const studentModule = () => import('./student/student.module').then(x => x.StudentModule);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', loadChildren: signUpModule },
  { path: 'course', loadChildren: courseModule },
  { path: 'student', loadChildren: studentModule },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
