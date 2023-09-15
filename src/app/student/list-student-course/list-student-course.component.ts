import { AuthService } from './../../core/service/auth.service';
import { User } from './../../core/model/user';

import { UserCourse } from './../model/user-course';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserCourseService } from '../service/user-course.service';

@Component({
  selector: 'app-list-student-course',
  templateUrl: './list-student-course.component.html',
  styleUrls: ['./list-student-course.component.css'],
})
export class ListStudentCourseComponent implements OnInit {
  userCourses!: UserCourse[];

  constructor(
    private userCourseService: UserCourseService,
    private toastService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const user = this.authService.userValue;
    this.getAllCourses(user.id);
  }

  getAllCourses(userId: number) {
    this.userCourseService
      .getAllCoursesByUserId(userId)
      .subscribe((userCourses) => (this.userCourses = userCourses));
  }
}
