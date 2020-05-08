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
  selector: 'app-add-pertemuan',
  templateUrl: './add-pertemuan.component.html',
  styleUrls: ['./add-pertemuan.component.scss'],
  providers:[DatePipe]
})
export class AddPertemuanComponent implements OnInit {

  datePertemuan: Date[];
  pertemuan : Pertemuan = new Pertemuan();
  idSubcourse: any;
  subcourse: Subcourse = new Subcourse();
  dateArray = [];
  dateBetween: Date[] = [];
  // dates: Date = new Date();
  invalidDates: Array<Date> = new Array();

  constructor(private route: ActivatedRoute, private pertemuanService: PertemuanService, 
    private subcourseService: SubcourseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.idSubcourse = params.idSubcourse
    );

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe( res => {
      this.subcourse = res;
    });


    // this.invalidDates = this.rangeDate(this.subcourse.tanggalMulai, this.subcourse.tanggalSelesai);

    // console.log(this.invalidDates[0]);
    
  }

  // rangeDate(start, end){
  //   var arr = new Array();
  //   var dt = new Date(start);
  //   while(dt <= end){
  //     arr.push(new Date(dt).toLocaleString);
  //     dt.setDate(dt.getDate()+1);
  //   }
  //   return arr;
  // }

  onSubmit() {
    for(let {index, value} of this.datePertemuan.map((value,index) => ({index, value}))) {
      this.pertemuan.idMateri = null;
      this.pertemuan.idSubcourse.idSubcourse = this.idSubcourse;
      this.pertemuan.pertemuan = index+1;
      this.pertemuan.tanggalPertemuan = value;
      this.pertemuanService.addPertemuan(this.pertemuan).subscribe( res => {
        this.onSuccess();
      }, err => {
        this.onFailed();
        console.log(err);
      })
    }
            
    
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Tambah Pertemuan Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Tambah Pertemuan Gagal!'})
  }

}
