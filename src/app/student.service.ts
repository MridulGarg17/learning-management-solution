import  {  Injectable  }  from  '@angular/core';
import  {  HttpClient,  HttpHeaders  }  from  '@angular/common/http';

@Injectable({
    providedIn:  'root'
})
export  class  StudentService  {
    BASE_URL  =  'https://pawanlms.herokuapp.com/students/';

    httpOptions  =  {
        headers:  new  HttpHeaders({
            'Content-Type':  'application/json; charset=utf-8',
        })
    };
    constructor(private  http:  HttpClient) { }

    getStudents() {
        return  this.http.get(this.BASE_URL);
    }

    postStudent(newStudent) {
        console.log(newStudent);
        return  this.http.post(this.BASE_URL,  newStudent,  this.httpOptions)
    }
} 