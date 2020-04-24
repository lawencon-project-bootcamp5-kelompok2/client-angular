import { Component, OnInit } from '@angular/core';
import { JadwalData } from '../jadwal-data';

@Component({
  selector: 'app-list-rekap-jadwal',
  templateUrl: './list-rekap-jadwal.component.html',
  styleUrls: ['./list-rekap-jadwal.component.scss']
})
export class ListRekapJadwalComponent implements OnInit {

  jadwal : JadwalData[]
  jadwal1 : JadwalData
  selectedRow : JadwalData

  constructor() { }

  ngOnInit(): void {
    this.jadwal = [
      {
        noUrut: 1,
        namaCourse: "Java"
      },
      {
        noUrut: 2,
        namaCourse: "Phyton"
      },
      {
        noUrut: 3,
        namaCourse: "PHP"
      },
      {
        noUrut: 4,
        namaCourse: "Kotlin"
      }
    ]
  }

  onRowSelect(event){
    this.jadwal1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : JadwalData){
    let jadwal = {};
    for(let prop in d){
      jadwal[prop] = d[prop];
    }
    return d;
  }  

}
