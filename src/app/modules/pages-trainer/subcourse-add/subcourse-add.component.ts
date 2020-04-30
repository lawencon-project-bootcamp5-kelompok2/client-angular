import { Component, OnInit, ElementRef } from '@angular/core';
import { Materi } from 'src/app/model/materi';
import { Subcourse } from 'src/app/model/subcourse';
import { Test } from 'src/app/model/test';
import { MateriService } from 'src/app/service/materi.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TestService } from 'src/app/service/test.service';
import { SoalService } from 'src/app/service/soal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcourse-add',
  templateUrl: './subcourse-add.component.html',
  styleUrls: ['./subcourse-add.component.scss']
})
export class SubcourseAddComponent implements OnInit {

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date

  materi : Materi = new Materi();
  subcourse: Subcourse = new Subcourse();
  test: Test = new Test();
  fileUpload: ElementRef;
  fileMateri: File = null;
  fileTest: File = null;
  idCourse : any;
  testMateri: any;

  constructor(private materiService : MateriService, private subcourseService: SubcourseService, private testService: TestService,
    private soalService: SoalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => {
      this.idCourse = params.idCourse;
    });
  }

  onSubmit(){
    this.subcourse.idCourse.idCourse = this.idCourse;
    this.materiService.uploadFile(this.fileMateri).subscribe( result => {
      this.subcourse.idMateri = result;
    },     
      error => console.log(error),
      () => console.log("done!")
    );
    this.subcourseService.insertSubcourse(this.subcourse).subscribe( result => {
      err => console.log(err);
    });

    
  }

  fileChange(event){
    const reader = new FileReader();
    reader.onload = () => {
    };
  }

  handleInputMateri(files: FileList) {
    this.fileMateri = files.item(0);
  }

  handleInputTest(files: FileList) {
    this.fileTest = files.item(0);
  }

}
