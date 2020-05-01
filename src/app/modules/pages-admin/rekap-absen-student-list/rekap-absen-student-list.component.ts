import { Component, OnInit } from '@angular/core';
import { StudentData } from '../student-data';

@Component({
  selector: 'app-rekap-absen-student-list',
  templateUrl: './rekap-absen-student-list.component.html',
  styleUrls: ['./rekap-absen-student-list.component.scss']
})
export class RekapAbsenStudentListComponent implements OnInit {

  student : StudentData[]
  student1 : StudentData
  selectedRow : StudentData

  constructor() { }

  ngOnInit(): void {
    document.getElementById("side").className="active";
    
    this.student = [
      {
        noUrut : 1,
        npm : "2342346434",
        nama : "Cloud Strife",
        email : "cloud@ffVii.com"
      },
      {
        noUrut : 2,
        npm : "2342345453",
        nama : "Didi Kempot",
        email : "didikempot@gmail.com"
      },
      {
        noUrut : 3,
        npm : "324325435454",
        nama : "Harry Potter",
        email : "harrypotter@hogwarts.com"
      }
    ]
  }

  onRowSelect(event){
    this.student1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : StudentData){
    let student = {};
    for(let prop in d){
      student[prop] = d[prop];
    }
    return d;
  }

}
