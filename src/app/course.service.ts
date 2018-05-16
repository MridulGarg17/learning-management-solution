import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    BASE_URL = 'https://lmsmridul.herokuapp.com/course/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        })
    };
    constructor(private http: HttpClient) { }

    getCourses() {
        return this.http.get(this.BASE_URL);
    }

    postCourse(coursename: string) {
        let cname = {
            'name': coursename
        }
        return this.http.post(this.BASE_URL, cname, this.httpOptions)
    }

    getBatches() {
        return this.http.get(this.BASE_URL + "batches");
    }

    postBatch(name:string, id:number) {
        let newBatch = {
            'name':name
        }
        return this.http.post(this.BASE_URL+id+'/batches',newBatch,this.httpOptions)
    }

}
