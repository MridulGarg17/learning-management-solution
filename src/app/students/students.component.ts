import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'
import { CourseService } from '../course.service'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    studentlist;
    batchlist;
    courselist;
    constructor(private data: StudentService,private bdata: CourseService) { }

    ngOnInit() {

        this.data.getStudents()
            .subscribe((res) => {
                console.log(res);
                this.studentlist = res;
            })

        this.bdata.getBatches()
            .subscribe((res) => {
                console.log(res);
                this.batchlist = res;
            })

        this.bdata.getCourses()
            .subscribe((res) => {
                console.log(res);
                this.courselist = res;
            })

    }

    addStudent(name: string, cid: number,bid: number) {
        console.log(name);
        console.log(bid);
        console.log(cid);
        let newStudent = {
            'name': name,
            'cid': cid,
            'bid': bid
        }
        this.data.postStudent(newStudent)
            .subscribe((res) => {
                console.log(res);

            })
    }

}
