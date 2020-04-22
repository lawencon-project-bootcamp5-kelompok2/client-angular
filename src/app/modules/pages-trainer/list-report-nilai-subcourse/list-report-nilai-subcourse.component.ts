import { Component, OnInit } from '@angular/core';
import { PilihNilai } from '../pilihNilai';

@Component({
  selector: 'app-list-report-nilai-subcourse',
  templateUrl: './list-report-nilai-subcourse.component.html',
  styleUrls: ['./list-report-nilai-subcourse.component.scss']
})
export class ListReportNilaiSubcourseComponent implements OnInit {

  pNilai : PilihNilai[]
  pNilai1 : PilihNilai
  cols : any[]
  selectedRow: PilihNilai

  constructor() { }

  ngOnInit(): void {
    this.pNilai = [
      {
        noUrut: 1,
        materi: "Java Basic",
        tanggal : "20 April 2020",
        link : '#'
      },
      {
        noUrut: 2,
        materi: "OOP",
        tanggal : "21 April 2020",
        link : '#'
      }
    ]
    this.cols = [
      {field: "noUrut", header:"No"},
      {field: "materi", header:"Materi"},
      {field: "tanggal", header:"Tanggal"},
      {field: "link", header:"Pilih"}
    ]
  }

  onRowSelect(event){
    this.pNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : PilihNilai){
    let pNilai = {};
    for(let prop in d){
      pNilai[prop] = d[prop];
    }
    return d;
  }

}
