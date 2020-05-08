import {Component, OnInit} from '@angular/core';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Title } from '@angular/platform-browser';
import { AbsensiService } from 'src/app/service/absensi.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Pertemuan } from 'src/app/model/pertemuan';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Subscription, interval } from 'rxjs';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';
import { Absensi } from 'src/app/model/absensi';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-materi',
  templateUrl: './detail-materi.component.html',
  styleUrls: ['./detail-materi.component.scss']
})
export class DetailMateriComponent implements OnInit {

  idPertemuan
  idSubcourse: any;
  subcourse: Subcourse;
  notifabsen1 : boolean
  notifabsen2 : boolean
  showmateri : boolean
  email
  absenData : any[]
  pertemuan : Pertemuan
  student : Student
  absensi : Absensi
  pipe
  today : Date = new Date()
  getToday
  private updateSubscription : Subscription
  constructor(
    private route: ActivatedRoute, 
    private materiService: MateriService, 
    private subcourseService: SubcourseService, 
    private title: Title, 
    private absensiService: AbsensiService,
    private token : TokenStorageService,
    private pertemuanService : PertemuanService,
    private studentService : StudentService
    ) {
  }

  ngOnInit() {
    //document.getElementById("sideEnroll").className="active";
    this.title.setTitle("Detail Materi - Student")
    const user = this.token.getUser()
    this.email = user.email
    this.pipe = new DatePipe('en-US')
    this.getToday = this.pipe.transform(this.today, "yyyy-MM-dd")
    this.route.queryParams.subscribe(
      params => {
        this.idSubcourse = params.subCourse
        this.idPertemuan = params.pertemuan
        this.studentService.getStudentByEmail(this.email).subscribe(
          data => {
            this.student = data
            this.updateSubscription = interval(1000).subscribe(
              refresh => {
                this.getData()
              }
            )
          },
          err => console.log("Ini error "+ err)
          
        )
      }
    );
  }

  getData(){
    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe(
      data => {
        this.pertemuan = data
        
        this.absensi = {
          idStudent : this.student,
          idSubcourse : this.pertemuan.idSubcourse,
          pertemuan : this.pertemuan,
          tanggal : this.getToday,
          status : null,
          idAbsensi : null
        }
      },
      err => {
        console.log("Ada error : "+ err)
        
      }
    )
    this.absensiService.getAbsenDataByEmailAndPertemuan(this.email, this.idPertemuan).subscribe(
      data => {
        this.absenData = data
        
        if (this.absenData[0].status == "Hadir") {
          
          this.notifabsen1 = false
          this.notifabsen2 = false
          this.showmateri = true
          
        } else {
          this.notifabsen1 = false
          this.notifabsen2 = true
          this.showmateri = false
        }
      },
      err => {

        this.notifabsen1 = true
        this.notifabsen2 = false
        this.showmateri = false
        
      }
    ) 
  }

  absenGo(absensi : Absensi){
    this.absensiService.addAbsen(absensi).subscribe(
      data => console.log(data),
      err => console.log("Ada error "+ JSON.stringify(err)),
      () => console.log("Complete")
    )
  }

  downloadFile(idMateri){
    this.materiService.downloadFile(idMateri).subscribe(blob => {
      saveAs(blob);
    })
  }

}
