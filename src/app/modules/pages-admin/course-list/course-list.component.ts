import { Component, OnInit } from '@angular/core';
import { CourseData } from '../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  course : CourseData[]
  course1 : CourseData
  selectedRow : CourseData

  constructor() { }

  ngOnInit(): void {
    this.course = [
      {
        noUrut:1,
        namaCourse : "Java"
      },
      {
        noUrut:2,
        namaCourse : "Phyton"
      }
    ]
  }

  onRowSelect(event){
    this.course1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : CourseData){
    let course = {};
    for(let prop in d){
      course[prop] = d[prop];
    }
    return d;
  }

}
