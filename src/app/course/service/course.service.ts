import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';


@Injectable({ providedIn: 'root' })
export class CourseService {
    constructor(private http: HttpClient) { }

    createCourse(course: any) {
        return this.http.post<any>(`${environment.apiUrl}/courses`, course)
    }

    getById(id: string) {
        return this.http.get<Course>(`${environment.apiUrl}/courses/${id}`);
    }

    getAll() {
        return this.http.get<Course[]>(`${environment.apiUrl}/courses`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/courses/${id}`, params);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/courses/${id}`);
    }
}