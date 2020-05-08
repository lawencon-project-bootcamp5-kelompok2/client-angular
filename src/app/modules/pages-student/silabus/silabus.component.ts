import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Course } from 'src/app/model/course';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.scss']
})
export class SilabusComponent implements OnInit {

  idKelas: any;
  namaCourse
  subcourse: Subcourse[];
  subcourse1 : Subcourse
  kelas : Kelas = new Kelas();
  course: Course = new Course();
  selectedRow : Subcourse
  today : Date = new Date()
  dvs : Date
  pipe
  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService, private kelasService : KelasService) {
  }

  ngOnInit() {

    // document.getElementById("sideEnroll").className="active";
    
    console.log(this.today);
    

    this.route.queryParams.subscribe(
      params => {this.idKelas = params.idKelas}
    );

    this.kelasService.getKelasById(this.idKelas).subscribe(
      data => {
        this.kelas = data
        this.subcourseService.getSubcourseByCourse(this.kelas.course.namaCourse).subscribe(
          result => this.subcourse = result,
          err => console.log(JSON.stringify(err)),
          () => console.log("done!")      
        );

      },
      err => console.log("Ade error : "+JSON.stringify(err))
      
    )

  }

  onRowSelect(event){
    this.subcourse1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Subcourse){
    let subcourse = {};
    for(let prop in d){
      subcourse[prop] = d[prop];
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
