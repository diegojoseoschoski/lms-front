import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentCourseComponent } from './list-student-course.component';

describe('ListStudentCourseComponent', () => {
  let component: ListStudentCourseComponent;
  let fixture: ComponentFixture<ListStudentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
