import {Component, OnInit} from '@angular/core';
import { Jawaban } from 'src/app/model/jawaban';
import { CourseService } from 'src/app/service/course.service';
import { TrainerService } from 'src/app/service/trainer.service';
import { StudentService } from 'src/app/service/student.service';
import { KelasService } from 'src/app/service/kelas.service';
import { LoginService } from 'src/app/service/login.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { TestService } from 'src/app/service/test.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  aaa : Jawaban[];
  aaa1: Jawaban;
  cols: any[];
  selectedRow: Jawaban;
  detailNilais : Jawaban[];
  idForDetail : number;

  nama : string
  student
  takenCourse

  constructor(private messageService: MessageService, private courseService: CourseService, private trainerService: TrainerService, private studentService: StudentService,
    private kelasService: KelasService, private userService: LoginService, private tokenStorage: TokenStorageService, private testService: TestService) {
  }

  ngOnInit() {
    
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.studentService.getStudentByEmail(user.email).subscribe(res => {
      this.student = res,
      this.takenCourse = res.kelas
    })

    
  }

  onSubmit(idStudent, idKelas, idCourse){
    this.studentService.reportStudent(idStudent, idKelas, idCourse).subscribe(result => {
      const file = new Blob([result], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }, err => {
        this.onFailed();
      }
    )
  }

  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Belum ada nilai!'})
  }

  onRowSelect(event) {
    // this.aaa1 = this.cloneSelection(event.data);
  }

}
