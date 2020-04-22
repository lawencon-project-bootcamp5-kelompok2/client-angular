import { Component, OnInit } from '@angular/core';
import { KelasData } from '../kelas-data';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  kelas : KelasData[]
  kelas1 : KelasData
  selectedRow : KelasData

  constructor() { }

  ngOnInit(): void {
    this.kelas = [
      {
        noUrut : 1,
        kelasKode : "X123",
        namaCourse : "Java",
        namaTrainer : "Imam Farisi"
      },
      {
        noUrut : 2,
        kelasKode : "X124",
        namaCourse : "Java",
        namaTrainer : "Albus Dumbledore"
      },
      {
        noUrut : 3,
        kelasKode : "K343",
        namaCourse : "Phyton",
        namaTrainer : "Albert Einstein"
      }
    ]
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : KelasData){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  }

}
