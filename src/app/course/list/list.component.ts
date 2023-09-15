import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Course } from 'src/app/course/model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses!: Course[];

  constructor(private courseService: CourseService,private toastService: ToastrService ) {}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAll()
    .subscribe(courses => this.courses = courses);
  }

  deleteCourse(id: number) {
      this.courseService.delete(id)
          .pipe(first())
          .subscribe(() => {
            this.toastService.success('Course deleted successfully!')
            this.getAllCourses();
          });
  }

}
