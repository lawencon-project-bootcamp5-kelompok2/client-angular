import { Component, OnInit } from '@angular/core';
import { ListMateriData } from '../listMateri-data';

@Component({
  selector: 'app-rekap-absensi-list',
  templateUrl: './rekap-absensi-list.component.html',
  styleUrls: ['./rekap-absensi-list.component.scss']
})
export class RekapAbsensiListComponent implements OnInit {

  listMateri : ListMateriData[]
  listMateri1 : ListMateriData
  selectedRow : ListMateriData

  constructor() { }

  ngOnInit(): void {
    this.listMateri = [
      {
        noUrut:1,
        namaMateri : "Java Basic",
        tglMulai : "21-4-2020",
        tglSelesai : "24-4-2020"
      },
      {
        noUrut:2,
        namaMateri : "OOP",
        tglSelesai : "26-4-2020",
        tglMulai : "25-4-2020"
      },
      {
        noUrut:3,
        namaMateri : "Java Features",
        tglSelesai : "28-4-2020",
        tglMulai : "27-4-2020"
      }
    ]
  }

  onRowSelect(event){
    this.listMateri1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : ListMateriData){
    let listMateri = {};
    for(let prop in d){
      listMateri[prop] = d[prop];
    }
    return d;
  }

}
