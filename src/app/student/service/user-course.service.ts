import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserCourse } from '../model/user-course';

@Injectable({ providedIn: 'root' })
export class UserCourseService {
    constructor(private http: HttpClient) { }

    createUserCourse(id:number, course: any) {
        return this.http.post<any>(`${environment.apiUrl}/users/${id}/courses`, course)
    }

    getAllCoursesByUserId(id: number) {
        return this.http.get<UserCourse[]>(`${environment.apiUrl}/users/${id}/courses`);
    }

}