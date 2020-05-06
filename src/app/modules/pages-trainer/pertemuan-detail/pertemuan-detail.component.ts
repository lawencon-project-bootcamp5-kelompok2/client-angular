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

@Component({
  selector: 'app-pertemuan-detail',
  templateUrl: './pertemuan-detail.component.html',
  styleUrls: ['./pertemuan-detail.component.scss']
})
export class PertemuanDetailComponent implements OnInit {
  
  idSubcourse: any;
  display : boolean = false;
  fileMateri: File = null;
  pertemuan: Pertemuan[];
  pertemuanInput: Pertemuan = new Pertemuan();
  displayDetail: boolean= false;

  constructor(private route: ActivatedRoute, private pertemuanService: PertemuanService, private messageService: MessageService,
    private subcourseService: SubcourseService, private materiService: MateriService) { }


  ngOnInit(): void {
    // document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse;
    });

    this.pertemuanService.getPertemuanBySubcourse(this.idSubcourse).subscribe( res => {
      this.pertemuan = res;
    }, err => console.log(this.pertemuan[0])
    , () => console.log(this.pertemuan[0])    
    )
  }

  onDownload(id){    
    this.materiService.downloadFile(id).subscribe(
      result => {saveAs(result)},
      error => console.log(id)
    )
  }

  onUploadMateri(){
      this.materiService.uploadFile(this.fileMateri).subscribe( res => {
        this.pertemuanInput.idMateri = res;
        }, err => console.log(err))
      
      this.pertemuanService.updatePertemuan(this.pertemuanInput).subscribe( res => {
        this.onSuccess();
      }, err => {
        this.onFailed();
        console.log(err);
      })
  }

  showUpload(id) {
    this.pertemuanService.getPertemuanById(id).subscribe( res => {
      this.pertemuanInput = res
    })
    this.display = true;
  }

  showDownload(id) {
    
  }

  handleInputMateri(files: FileList) {
    this.fileMateri = files.item(0);
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Upload Materi Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Upload Materi Gagal!'})
  }

  cloneSelection(s : Subcourse){
    let subcourse = {};
    for(let prop in s){
      subcourse[prop] = s[prop];
    }
    return s;
  }

}
