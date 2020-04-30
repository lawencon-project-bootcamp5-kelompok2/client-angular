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
  kelas: Kelas[];
  idCourse: any;
  content: any;
  nama : string;
  idStudent: string;

  constructor(private courseService: CourseService, private trainerService: TrainerService, private studentService: StudentService,
    private kelasService: KelasService, private userService: LoginService, private tokenStorage: TokenStorageService, public router: Router) {}

  ngOnInit() {
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;
    this.idStudent = user.id;

    this.kelasService.getKelas().subscribe(
      result => this.kelas = result,
      err => console.log(("error found," + JSON.stringify(err)))
    );

    // this.studentService.getStudentById(this.idStudent).subscribe(
    //   result => this.student = result,
    //   err => console.log(err),
    //   () => console.log("done!")
    // );

    this.studentService.getStudentByEmail(user.email).subscribe( res => {
      this.student = res,
      err => console.log(err)      
    })

    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
    }

    this.userService.getStudentBoard().subscribe(
      data => {
        this.content = data;
        this.studentService.getStudentByEmail(user.email).subscribe(
          result => this.takenCourse = result.kelas
        )
        
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
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    
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
