import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pertemuan } from 'src/app/model/pertemuan';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pertemuan',
  templateUrl: './pertemuan.component.html',
  styleUrls: ['./pertemuan.component.scss']
})
export class PertemuanComponent implements OnInit {

  idSubCourseTemp
  idKelasTemp
  pertemuan : Pertemuan[]
  pertemuan1 : Pertemuan
  selectedRow : Pertemuan
  subcourse : Subcourse
  today : Date = new Date()
  pipe
  constructor(private activatedRoute :ActivatedRoute, private pertemuanService:PertemuanService, private subcourseService:SubcourseService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.idSubCourseTemp = params.subCourse
        this.subcourseService.getSubcourseById(this.idSubCourseTemp).subscribe(
          data => this.subcourse = data,
          err => console.log("Ada error "+err),
          () => console.log("Complete")
        )
        
        this.pertemuanService.getPertemuanBySubcourse(this.idSubCourseTemp).subscribe(
          data => this.pertemuan = data,
          err => console.log("Ada error" + JSON.stringify(err)),
          () => console.log("Complete")
        )
      }
    )

  }

  onRowSelect(event){
    this.pertemuan1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Pertemuan){
    let pertemuan = {};
    for(let prop in d){
      pertemuan[prop] = d[prop];
    }
    return d;
  }

  hiddenGo(tgl : Date) : boolean{
    this.pipe = new DatePipe('en-US')
    let getToday : Date = this.pipe.transform(this.today, "yyyy-MM-dd")
    if (tgl <= getToday) {
      return true
    } else {
      return false
    }
    
  }



}
