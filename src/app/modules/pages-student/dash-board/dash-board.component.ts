import {Component, OnInit} from '@angular/core';
import { Dashboard } from '../dash';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  tableIsEmpty = true;
  dash : Dashboard[];
  dash1: Dashboard;
  cols : any[];
  selectedRow: Dashboard;
  courses : Course[];
  course : Course;
  trainers : Trainer[];

  constructor(private courseService: CourseService, private trainerService: TrainerService) {
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
  }

  ngOnInit() {
    this.cols = [
      {field:"kode", header:"Kode"},
      {field:"namaCourse", header:"Course"},
      {field:"trainer", header:"Instruktur"},
      {field:"mulai", header:"Mulai"},
      {field:"selesai", header:"Selesai"}
    ]
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
