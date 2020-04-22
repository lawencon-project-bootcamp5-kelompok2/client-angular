import { Component, OnInit } from '@angular/core';
import { MateriData } from '../materi-data';

@Component({
  selector: 'app-materi-list',
  templateUrl: './materi-list.component.html',
  styleUrls: ['./materi-list.component.scss']
})
export class MateriListComponent implements OnInit {

  materi : MateriData[]
  materi1 : MateriData
  seletedRow : MateriData 

  constructor() { }

  ngOnInit(): void {
    this.materi = [
      {
        noUrut:1,
        namaMateri : "Java Basic",
        tglMulai : "21-04-2020",
        tglSelesai : "22-04-2020",
        tglMulaiKuis : "22-04-2020 10:00",
        tglSelesaiKuis : "22-04-200 12:00"
      },
      {
        noUrut:2,
        namaMateri : "OOP",
        tglMulai : "23-04-2020",
        tglSelesai : "24-04-2020",
        tglMulaiKuis : "24-04-2020 10:00",
        tglSelesaiKuis : "24-04-200 12:00"
      },
      {
        noUrut:3,
        namaMateri : "Java Features",
        tglMulai : "25-04-2020",
        tglSelesai : "26-04-2020",
        tglMulaiKuis : "26-04-2020 10:00",
        tglSelesaiKuis : "26-04-200 12:00"
      }
    ]
  }

  onRowSelect(event){
    this.materi1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : MateriData){
    let materi = {};
    for(let prop in d){
      materi[prop] = d[prop];
    }
    return d;
  }

}
