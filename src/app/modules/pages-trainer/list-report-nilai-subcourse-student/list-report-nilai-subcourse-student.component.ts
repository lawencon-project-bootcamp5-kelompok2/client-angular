import { Component, OnInit } from '@angular/core';
import { NilaiSubCourse } from '../nilaiSubCourse';

@Component({
  selector: 'app-list-report-nilai-subcourse-student',
  templateUrl: './list-report-nilai-subcourse-student.component.html',
  styleUrls: ['./list-report-nilai-subcourse-student.component.scss']
})
export class ListReportNilaiSubcourseStudentComponent implements OnInit {

  rNilai : NilaiSubCourse[]
  rNilai1 : NilaiSubCourse
  
  selectedRow : NilaiSubCourse

  constructor() { }

  ngOnInit(): void {
    this.rNilai = [
      {
        noUrut:1,
        npm : "1232132",
        namaStudent : "Didi Kempot",
        statusAbsen : "Hadir",
        nilai : 98
      },
      {
        noUrut: 2,
        npm : "4352354",
        namaStudent : "Tony Stark",
        statusAbsen : "Tidak Hadir",
        nilai : 0
      }
    ]
  }

  onRowSelect(event){
    this.rNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : NilaiSubCourse){
    let rNilai = {};
    for(let prop in d){
      rNilai[prop] = d[prop];
    }
    return d;
  }
}
