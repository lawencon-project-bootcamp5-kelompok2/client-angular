import { Component, OnInit } from '@angular/core';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TestService } from 'src/app/service/test.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Test } from 'src/app/model/test';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-materi',
  templateUrl: './add-materi.component.html',
  styleUrls: ['./add-materi.component.scss']
})
export class AddMateriComponent implements OnInit {

  dateTestMulai : Date;
  dateTestSelesai: Date;
  dateTglMulai : Date;
  dateTglSelesai : Date;
  subcourse = new Subcourse();
  test = new Test();
  idCourse: any;

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService, 
    private testService: TestService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.idCourse = params.idCourse
    );

    this.test.idSubcourse.idCourse.trainer = null;
    this.test.idSubcourse.idMateri = null;
    this.test.fileSoal = null;
    this.test.idSubcourse.idCourse.idCourse = this.idCourse;
  }

  onSubmit() {
    this.testService.insertTest(this.test).subscribe(res => {
      this.onSuccess();
      }, err => {
        this.onFailed();
        console.log(err);
      })
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Tambah Kelas Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Tambah Kelas Gagal!'})
  }

}
