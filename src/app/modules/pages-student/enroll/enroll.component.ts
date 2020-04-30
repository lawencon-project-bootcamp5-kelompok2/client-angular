import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Student } from 'src/app/model/student';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { StudentService } from 'src/app/service/student.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  idKelas: any;
  idStudent: any;
  namaKelas: any;
  kelas: Kelas = new Kelas();
  student = new Student();
  studentEm = new Student();
  user : any;

  constructor(private route: ActivatedRoute, private courseService: CourseService,
    private kelasService: KelasService, private studentService: StudentService, private routerLink: Router,
    private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    document.getElementById("sideEnroll").className="active";
    
    const user = this.tokenStorage.getUser();
    this.user = user;
    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
      this.namaKelas = params.namaCourse
     
      
    }
    );

    this.studentService.getStudentByEmail(user.email).subscribe( res => {
      this.student = res
    })

    // this.courseService.getCourseById(this.idCourse).subscribe(
    //   result => this.course = result,
    //   err => console.log(err)
    // );

    this.kelasService.getKelasById(this.idKelas).subscribe(result => {
      this.kelas = result;
      },
      err => console.log(this.student) 
    );

    this.studentService.getStudentByEmail(this.user.email).subscribe( res => {
      this.studentEm = res;
    },
    err => console.log(err)
    );

    this.studentService.getStudentById(this.studentEm.idStudent).subscribe( res => {
      this.student = res;
    },
    err => console.log(err)
    );
  }

  onPilih(){
    this.student.idStudent = this.studentEm.idStudent;
    this.student.namaStudent = this.user.nama;
    
    this.student.kelas = [this.kelas];
    this.studentService.updateStudent(this.student).subscribe(
      err => console.log(err),
      () => console.log("done")
    );
  }

}
