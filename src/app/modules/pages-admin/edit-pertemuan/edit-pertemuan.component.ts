import { Component, OnInit } from '@angular/core';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TestService } from 'src/app/service/test.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Test } from 'src/app/model/test';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Pertemuan } from 'src/app/model/pertemuan';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-pertemuan',
  templateUrl: './edit-pertemuan.component.html',
  styleUrls: ['./edit-pertemuan.component.scss'],
  providers:[DatePipe]
})
export class EditPertemuanComponent implements OnInit {

  datePertemuan: Date[];
  pertemuan : Pertemuan = new Pertemuan();
  subcourse: Subcourse = new Subcourse();
  dateArray = [];
  dateBetween: Date[] = [];
  idPertemuan: any;
  invalidDates: Array<Date> = new Array();

  constructor(private route: ActivatedRoute, private pertemuanService: PertemuanService, 
    private subcourseService: SubcourseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.idPertemuan = params.idPertemuan
    );

    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe( res => {
      this.pertemuan = res;
    })

  }

  onSubmit() {            
    this.pertemuanService.updatePertemuan(this.pertemuan).subscribe( res => {
      this.onSuccess();
    }, err => {
      this.onFailed();
      console.log(err);
    })
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Update Pertemuan Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Update Pertemuan Gagal!'})
  }

}
