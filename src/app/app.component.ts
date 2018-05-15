import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMD';
  homepage: boolean = false;
  coursepage: boolean = false;
  studentpage: boolean = false;
  subjectpage: boolean = false;
  teacherpage: boolean = false;


  home() {
    this.homepage = true;
    this.coursepage = false;
    this.studentpage = false;
    this.subjectpage = false;
    this.teacherpage = false;

  }
  course() {
    this.homepage = false;
    this.coursepage = true;
    this.studentpage = false;
    this.subjectpage = false;
    this.teacherpage = false;

  }
  student() {
    this.homepage = false;
    this.coursepage = false;
    this.studentpage = true;
    this.subjectpage = false;
    this.teacherpage = false;

  }
  subject() {
    this.homepage = false;
    this.coursepage = false;
    this.studentpage = false;
    this.subjectpage = true;
    this.teacherpage = false;

  }
  teacher() {
    this.homepage = false;
    this.coursepage = false;
    this.studentpage = false;
    this.subjectpage = false;
    this.teacherpage = true;
  }
}
