import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';
import { MessageService } from 'primeng/api';
import { KelasService } from 'src/app/service/kelas.service';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Pertemuan } from 'src/app/model/pertemuan';
import { SoalService } from 'src/app/service/soal.service';
import { TestService } from 'src/app/service/test.service';
import { Soal } from 'src/app/model/soal';
import { Test } from 'src/app/model/test';

@Component({
  selector: 'app-pertemuan-detail',
  templateUrl: './pertemuan-detail.component.html',
  styleUrls: ['./pertemuan-detail.component.scss']
})
export class PertemuanDetailComponent implements OnInit {
  
  idSubcourse: any;
  display : boolean = false;
  fileMateri: File = null;
  fileSoal: File = null;
  pertemuan: Pertemuan[];
  idPertemuan: any;
  pertemuanInput: Pertemuan = new Pertemuan();
  displayDetail: boolean= false;
  displayTest: boolean = false;
  displayTestDetail: boolean = false;
  idKelas: any;
  subcourse: Subcourse = new Subcourse();
  soal: Soal = new Soal();
  test: Test = new Test();
  testEmpty: boolean;
  idTest : any;

  constructor(private route: ActivatedRoute, private pertemuanService: PertemuanService, private messageService: MessageService,
    private subcourseService: SubcourseService, private materiService: MateriService, private soalService: SoalService,
    private testService: TestService) { }


  ngOnInit(): void {
    document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse;
      this.idKelas = params.idKelas;
    });

    this.pertemuanService.getPertemuanBySubcourse(this.idSubcourse).subscribe( res => {
      this.pertemuan = res;
    }, err => console.log(err)   
    )

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe( res => {
      this.subcourse = res;
    }, err => console.log(err))
  }

  // onDownload(){    
  //   this.materiService.downloadFile(this.pertemuanInput.idMateri.idMateri).subscribe(
  //     result => {saveAs(result)},
  //     error => console.log(error)
  //   )
  // }

  onUploadMateri(){
      this.materiService.uploadFile(this.fileMateri).subscribe( res => {
        this.pertemuanInput.idMateri = res;
        this.pertemuanService.updatePertemuan(this.pertemuanInput).subscribe( res => {
          this.onSuccess();
          console.log(this.pertemuanInput);
        }, err => {
          this.onFailed();
          console.log(err);
        })
        }, err => console.log(err))
  }

  onUploadSoal() {
    this.soalService.uploadFile(this.fileSoal).subscribe( res => {
      this.test.fileSoal.idSoal = res.idSoal;
      this.test.idSubcourse.idSubcourse = this.idSubcourse;
      this.testService.insertTest(this.test).subscribe( res => {
        this.onSuccess();
        console.log(this.test);
      }, err => {
        this.onFailed();
        console.log(err);
      })
    })
  }

  onTestDelete() {
    this.testService.getTestBySubcourse(this.idSubcourse).subscribe(res => {
      this.idTest = res[0].idTest;
      this.testService.deleteTest(this.idTest).subscribe(res => {
        this.deleteSuccess();
      }, err => this.deleteFailed())
    }, err => {
      console.log(err);
    })
  }

  showDetailMateri(id){
    this.pertemuanService.getPertemuanById(id).subscribe( res => {
      this.pertemuanInput = res;
      console.log(this.pertemuanInput);
      
    }, err => {
      console.log(err);
      
    });
    this.displayDetail = true;
  }

  showUpload(id) {
    this.pertemuanService.getPertemuanById(id).subscribe( res => {
      this.pertemuanInput = res;
      console.log(res);
      
    })
    this.display = true;
  }

  showUploadTest(){
    this.idPertemuan = this.pertemuan[this.pertemuan.length - 1].idPertemuan;
    this.displayTest = true;
  }

  handleInputMateri(files: FileList) {
    this.fileMateri = files.item(0);
  }

  handleInputSoal(files: FileList) {
    this.fileSoal = files.item(0);
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Upload Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Upload Gagal!'})
  }

  deleteSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Hapus Ujian Berhasil!'})
  }
  deleteFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Hapus Ujian Gagal!'})
  }

  // cloneSelection(s : Subcourse){
  //   let subcourse = {};
  //   for(let prop in s){
  //     subcourse[prop] = s[prop];
  //   }
  //   return s;
  // }

}
