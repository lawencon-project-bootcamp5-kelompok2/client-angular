import { Component, OnInit } from '@angular/core';
import { RekapAbsenData } from '../rekapAbsen-data';

@Component({
  selector: 'app-rekap-absensi',
  templateUrl: './rekap-absensi.component.html',
  styleUrls: ['./rekap-absensi.component.scss']
})
export class RekapAbsensiComponent implements OnInit {

  rekapAbsen : RekapAbsenData[]
  rekapAbsen1 : RekapAbsenData
  selectedRow : RekapAbsenData

  constructor() { }

  ngOnInit(): void {
    this.rekapAbsen = [
      {
        noUrut : 1,
        namaStudent : "Cloud Strife",
        tgl1 : "Hadir",
        tgl2 : "Tidak Hadir"
      },
      {
        noUrut : 2,
        namaStudent : "Didi Kempot",
        tgl1 : "Hadir",
        tgl2 : "Hadir"
      },
      {
        noUrut : 3,
        namaStudent : "Valentino Rossi",
        tgl1 : "Hadir",
        tgl2 : "Hadir"
      }
    ]
  }

  onRowSelect(event){
    this.rekapAbsen1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : RekapAbsenData){
    let rekapAbsen = {};
    for(let prop in d){
      rekapAbsen[prop] = d[prop];
    }
    return d;
  }

}
