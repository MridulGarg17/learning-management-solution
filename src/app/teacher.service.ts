import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    BASE_URL = 'https://lmsmridul.herokuapp.com/teacher';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        })
    };

    constructor(private http: HttpClient) { }

    getTeachers() {
        return this.http.get(this.BASE_URL);
    }

    postTeachers(newTeacher) {
        return this.http.post(this.BASE_URL, newTeacher, this.httpOptions)
    }

}
