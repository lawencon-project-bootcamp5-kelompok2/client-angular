import { Component, OnInit } from '@angular/core';
import { CourseData } from '../course-data';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  course : Course[]
  course1 : Course
  selectedRow : Course

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.getDataCourse()
  }

  onRowSelect(event){
    this.course1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Course){
    let course = {};
    for(let prop in d){
      course[prop] = d[prop];
    }
    return d;
  }

  getDataCourse(){
    let resp = this.courseService.getCourse()
    resp.subscribe(
      (data)=>this.course = data,
      (err)=>console.log("Ada error : "+err),
      ()=>console.log("Complete")
    )
  }

}
