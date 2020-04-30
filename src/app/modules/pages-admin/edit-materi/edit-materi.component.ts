import { Component, OnInit } from '@angular/core';
import { Subcourse } from 'src/app/model/subcourse';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-materi',
  templateUrl: './edit-materi.component.html',
  styleUrls: ['./edit-materi.component.scss']
})
export class EditMateriComponent implements OnInit {

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date
  subcourse = new Subcourse()
  idSubcourse: any

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse;
    })
    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe( res => {
      this.subcourse = res
    })

    this.subcourse.idSubcourse = this.idSubcourse
  }

  onSubmit(){
    this.subcourseService.updateSubcourse(this.subcourse).subscribe(res => {
      this.onSuccess();
    }, err => {
      this.onFailed();
      console.log(err);      
    })
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Update Materi Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Update Materi Gagal!'})
  }

}
