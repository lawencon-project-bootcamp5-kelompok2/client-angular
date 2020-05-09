import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test.service';
import { Test } from 'src/app/model/test';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { SoalService } from 'src/app/service/soal.service';
import { saveAs } from 'file-saver';
import { FileJawabanService } from 'src/app/service/file-jawaban.service';
import { JawabanService } from 'src/app/service/jawaban.service';
import { Jawaban } from 'src/app/model/jawaban';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { StudentService } from 'src/app/service/student.service';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  // TODO: kondisi buttonOn ngeGet dari backend
  idStudent: any;
  buttonOn = true;
  idSubcourse : any;
  test : Test = new Test();
  subcourse: Subcourse = new Subcourse();
  jawaban: Jawaban = new Jawaban();
  mulai: any;
  selesai : any;
  idSoal: any;
  idTest: any;
  fileJawaban: File;
  coba1 : string = "";
  coba2 : string = "";
  userTime : any;
  testDone : any;
  idKelas
  testData : any[]
  openKuis : boolean
  tempOpen
  tempClose
  today : Date = new Date()
  private updateSubscription : Subscription 
  // now: Date;
  // deadline: Date;

  constructor(
    private route: ActivatedRoute, 
    private testService: TestService, 
    private subcourseService: SubcourseService,
    private soalService: SoalService, 
    private fileJawabanService: FileJawabanService, 
    private jawabanService: JawabanService,
    private sessionStorage: TokenStorageService, 
    private studentService: StudentService, 
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    //document.getElementById("sideEnroll").className="active";
    
    const user = this.sessionStorage.getUser();

    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.subCourse;
      this.idKelas = params.idKelas;
      this.testService.getTestBySubcourse(this.idSubcourse).subscribe(
        data => {
          this.testData = data   
          this.idTest = data[0].idTest       
          this.subcourseService.getSubcourseById(this.idSubcourse).subscribe( res => {
            {
              this.subcourse = res
              this.tempOpen = this.subcourse.tanggalSelesai + " " + this.testData[0].waktuMulai
              this.tempClose = this.subcourse.tanggalSelesai + " " + this.testData[0].waktuSelesai
              console.log(this.tempOpen + " dan " + this.tempClose);
              setInterval(this.fungsi, 1000);
            };
          }, err => console.log(err))
        },
        err => console.log(err),
        () => console.log("Complete")
      )
    }, err => {
      console.log(err);
    });

    this.studentService.getStudentByEmail(user.email).subscribe(res => {
      this.idStudent = res.idStudent;
    })

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe( res => {
      this.subcourse = res;
    }, err => console.log(err))

    // this.testService.getTestBySubcourse(this.idSubcourse).subscribe( res => {
    //   this.mulai = res[0].waktuMulai.split(":");
    //   this.selesai = res[0].waktuSelesai.split(":");
    //   this.idTest = res[0].idTest;
    //   this.testService.getTestById(this.idTest).subscribe( res => {
    //     this.test = res;
    //     console.log("0");
    //   })      
    // })
  }

  downloadSoal(idSoal){
    this.soalService.downloadFile(idSoal).subscribe(blob => {
      saveAs(blob);
    })    
  }

  handleInputJawaban(files: FileList){
    this.fileJawaban = files.item(0);
  }

  uploadJawaban(){
    this.fileJawabanService.uploadFile(this.fileJawaban).subscribe(res => {
      this.jawaban.fileJawaban.idFileJawaban = res.idFileJawaban;
      this.jawaban.idStudent.idStudent = this.idStudent;
      this.jawaban.idTest.idTest = this.idTest;
      this.jawabanService.insertJawaban(this.jawaban).subscribe(res => {
        this.onSuccess();
        console.log("done!");
      }, err => {
        console.log(err);
        this.onFailed();
      })
    })
  }

  // timer() {
  //   let now = new Date();
  //   let deadline = new Date().getTime();
    
  //   let userTime = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
  //   // done = (this.selesai[0] * 3600) + (this.selesai[1] * 60) + this.selesai[2];
  //   // done = this.selesai;
    

  //   // this.userTime = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
  //   // this.testDone = (deadline.getHours() * 3600) + (deadline.getMinutes() * 60) + deadline.getSeconds();
    
  //   // this.coba1 = now;
  //   // this.coba2 = deadline;
  //   let distance = userTime - userTime;

  //   console.log(this.selesai);
    
  
  //   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //   if (distance < 0) {
  //     document.getElementById("infoTest").innerHTML = "<font color='red'><b>Maaf anda tidak bisa upload karena waktu sudah habis<b></font>";
  //     document.getElementById("timer").innerHTML ="00:00:00";
  //   } else {
  //     document.getElementById("infoTest").innerHTML = "<b>Upload jawaban dibawah ini sebelum waktu habis<b>";
  //     document.getElementById("timer").innerHTML = hours.toString().padStart(2, "0") + ":" + 
  //       minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  //   }
  // }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Upload Jawaban Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Upload Jawaban Gagal!'})
  }

  fungsi () : boolean{
    
    let countDeadline = new Date(this.tempClose).getTime();

    let now = new Date().getTime();
  
    let distance = countDeadline - now;
  
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if (distance < 0) {
      document.getElementById("infoTest").innerHTML = "<font color='red'><b>Maaf anda tidak bisa upload karena waktu sudah habis<b></font>";
      document.getElementById("timer").innerHTML ="00:00:00";
      return false
    } else {
      document.getElementById("infoTest").innerHTML = "<b>Upload jawaban dibawah ini sebelum waktu habis<b>";
      document.getElementById("timer").innerHTML = hours.toString().padStart(2, "0") + ":" + 
      minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
      return true
    }
  }


}
