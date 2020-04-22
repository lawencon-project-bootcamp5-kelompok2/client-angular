import {Component, OnInit} from '@angular/core';
import { Dashboard } from '../dash';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';
import { Student } from 'src/app/model/student';
import {FilterUtils} from 'primeng/utils';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  tableIsEmpty = true;
  cols : any[];
  selectedRow: Dashboard;
  courses : Course[];
  course : Course;
  trainers : Trainer[];
  colCourse: any[];
  takenCourse: Student;

  constructor(private courseService: CourseService, private trainerService: TrainerService, private studentService: StudentService) {
    courseService.getCourse().subscribe(
      result => this.courses = result,
      err => console.log("Error found!," + JSON.stringify(err)),
      () => console.log("done!")      
    );

    trainerService.getTrainer().subscribe(
      result => this.trainers = result,
      err => console.log("Error found!" + JSON.stringify(err)),
      () => console.log("done!")    
    );

    studentService.getStudentById(1).subscribe(
      result => this.takenCourse = result,
      err => console.log("Error! " + JSON.stringify(err)),
      () => console.log("done!")
      
      
    )
  }

  ngOnInit() {
    this.cols = [
      {field:"kode", header:"Kode"},
      {field:"namaCourse", header:"Kelas"},
      {field:"trainer", header:"Instruktur"},
      {field:"mulai", header:"Mulai"},
      {field:"selesai", header:"Selesai"}
    ];

    this.colCourse = [
      {field:"kelas", header:"Kode"},
      {field:"kelas", header:"Kelas"},
      {field:"kelas", header:"Instruktur"},
      {field:"kelas", header:"Mulai"},
      {field:"kelas", header:"Selesai"}
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
      }

      if (value === undefined || value === null) {
          return false;
      }
      
      return parseInt(filter) > value;
    }
  }

  onRowSelect(event) {
    this.course = this.cloneSelection(event.data);
  }

  cloneSelection(c : Course){
    let course = {};
    for(let prop in c){
      course[prop] = c[prop];
    }
    return c;
  }

}
