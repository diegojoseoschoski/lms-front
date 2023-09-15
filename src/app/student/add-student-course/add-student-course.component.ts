import { CreateUserCourse } from './../model/create-user-course';
import { AuthService } from './../../core/service/auth.service';
import { Course } from 'src/app/course/model/course';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { CourseService } from 'src/app/course/service/course.service';
import { UserCourseService } from '../service/user-course.service';

@Component({
  selector: 'app-add-student-course',
  templateUrl: './add-student-course.component.html',
  styleUrls: ['./add-student-course.component.css'],
})
export class AddStudentCourseComponent implements OnInit {
  courses!: Course[];

  form!: FormGroup;
  id!: string;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private userCourseService: UserCourseService,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.courseService
      .getAll()
      .subscribe((courses) => (this.courses = courses));

    this.form = this.formBuilder.group({
      selectedCoursesIds: [],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.createUserCourses(this.form.get('selectedCoursesIds')?.value);
  }

  private createUserCourses(coursesId: []) {
   
    this.userCourseService
      .createUserCourse(this.authService.userValue.id, new CreateUserCourse(coursesId))
      .pipe(first())
      .subscribe(() => {
        this.toastService.success('Created a learning process!');
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }
}
