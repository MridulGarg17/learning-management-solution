import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { CourseService } from './course.service'
import { StudentService } from './student.service';
import { SubjectService } from './subject.service';
import { TeacherService } from './teacher.service';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        StudentsComponent,
        SubjectsComponent,
        TeachersComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [CourseService, StudentService, SubjectService, TeacherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
