import { Component, OnInit } from '@angular/core';
import { JadwalData } from '../jadwal-data';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-list-rekap-jadwal',
  templateUrl: './list-rekap-jadwal.component.html',
  styleUrls: ['./list-rekap-jadwal.component.scss']
})
export class ListRekapJadwalComponent implements OnInit {

  
  course : Course[]
  course1 : Course
  selectedRow : Course

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourse().subscribe(
      data => this.course = data,
      err => console.log("Ada Error" + err),
      () => console.log("Complete")
    )
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
}
