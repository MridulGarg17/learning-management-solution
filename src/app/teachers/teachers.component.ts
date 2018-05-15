import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

    subjectlist;
    teacherlist;

    constructor(private sdata: SubjectService, private tdata: TeacherService) { }

    ngOnInit() {

        this.tdata.getTeachers()
            .subscribe((res) => {
                console.log(res);
                this.teacherlist = res;
            })

        this.sdata.getSubjects()
            .subscribe((res) => {
                console.log(res);
                this.subjectlist = res;
            })
  }

    addTeacher(name: string, sid: number) {
        console.log(name);
        console.log(sid);
        let newTeacher = {
            'name': name,
            'sid': sid
        }
        this.tdata.postTeachers(newTeacher)
            .subscribe((res) => {
                console.log(res);

            })
    }


}
