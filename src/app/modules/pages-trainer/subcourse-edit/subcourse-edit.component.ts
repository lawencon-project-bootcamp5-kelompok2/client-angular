import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { MateriService } from 'src/app/service/materi.service';

@Component({
  selector: 'app-subcourse-edit',
  templateUrl: './subcourse-edit.component.html',
  styleUrls: ['./subcourse-edit.component.scss']
})
export class SubcourseEditComponent implements OnInit {

  subcourse = new Subcourse();
  idSubcourse: any;
  fileUpload: ElementRef;
  fileMateri: File = null;
  fileTest: File = null;

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService,
    private materiService: MateriService) { }

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date


  ngOnInit(): void {
    document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => 
      this.idSubcourse = params.idSubcourse
    );

    this.fileMateri = null;

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(result => 
      this.subcourse = {
        idSubcourse: result.idSubcourse,
        namaSubcourse: result.namaSubcourse,
        idCourse: result.idCourse,
        idMateri: null,
        idForum: result.idForum,
        tanggalMulai: new Date(result.tanggalMulai),
        tanggalSelesai: new Date(result.tanggalSelesai)
      },
      err => console.log(err)      
    );
  }

  onUpdate(){
    this.materiService.uploadFile(this.fileMateri).subscribe(result => {
      this.subcourse.idMateri = result;
      },
      err => console.log(err),
      () => console.log("done")      
    );

    this.subcourseService.updateSubcourse(this.subcourse).subscribe(result => {
      err => console.log(err);
      },
      err => console.log(err)
    );
    
  }

  handleFileMateri(files: FileList){
    this.fileMateri = files.item(0);
  }

  handleFileTest(files: FileList){
    this.fileTest = files.item(0);
  }

}
