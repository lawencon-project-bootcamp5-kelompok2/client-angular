import {Component, OnInit} from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';
import { Student } from 'src/app/model/student';
import {FilterUtils} from 'primeng/utils';
import { StudentService } from 'src/app/service/student.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { LoginService} from '../../../service/login.service'
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  tableIsEmpty = false;
  cols : any[];
  selectedRow: Course;
  courses : Course[];
  course : Course;
  colCourse: any[];
  student: Student = new Student();
  takenCourse: Kelas[] = [];
  kelas: any;
  idCourse: any;
  content: any;
  nama : string;
  idStudent: string;

  constructor(private courseService: CourseService, private trainerService: TrainerService, private studentService: StudentService,
    private kelasService: KelasService, private userService: LoginService, private tokenStorage: TokenStorageService, public router: Router) { }

  ngOnInit() {
    // document.getElementById("sideDashboard").className = "active";

    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.studentService.getStudentByEmail(user.email).subscribe(res => {
      this.student = res,
      this.takenCourse = res.kelas,
      this.kelasService.getAvailableKelas(this.student.idStudent).subscribe(res => {
        this.kelas = res
      })
    })

    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
    }
        
        if(this.takenCourse.length >= 0){
          this.tableIsEmpty = false;
        }
    
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
