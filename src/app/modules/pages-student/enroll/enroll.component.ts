import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Student } from 'src/app/model/student';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { StudentService } from 'src/app/service/student.service';
import { HttpResponse } from '@angular/common/http';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  idKelas: any;
  namaKelas: any;
  kelas: Kelas = new Kelas();
  student = new Student();

  constructor(private route: ActivatedRoute, private courseService: CourseService,
    private kelasService: KelasService, private studentService: StudentService, private routerLink: Router,
    private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    const user = this.tokenStorage.getUser();

    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idCourse;
      this.namaKelas = params.namaCourse
    }
    );

    // this.courseService.getCourseById(this.idCourse).subscribe(
    //   result => this.course = result,
    //   err => console.log(err)
    // );

    this.kelasService.getKelasById(this.namaKelas).subscribe(result => {
      this.kelas = result;
      },
      err => console.log(err) 
    );

    this.studentService.getStudentByEmail(user.email).subscribe( res => {
      this.student = res
    })
  }

  onPilih(){
    // this.student.idStudent = ;
    // this.student.namaStudent = "Rizky";
    // this.student.npm = 115;
    // this.student.role = "Student";
    this.student.kelas = [this.kelas];
    this.studentService.updateStudent(this.student).subscribe(
      err => console.log(err),
      () => console.log("done")
    );
  }

}
