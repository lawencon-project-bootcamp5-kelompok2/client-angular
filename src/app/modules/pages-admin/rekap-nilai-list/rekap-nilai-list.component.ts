import { Component, OnInit } from '@angular/core';
import { RekapNilaiClassData } from '../rekapNilaiClass-data';

@Component({
  selector: 'app-rekap-nilai-list',
  templateUrl: './rekap-nilai-list.component.html',
  styleUrls: ['./rekap-nilai-list.component.scss']
})
export class RekapNilaiListComponent implements OnInit {

  rekapNilaiClass : RekapNilaiClassData[]
  rekapNilaiClass1 : RekapNilaiClassData
  selectedRow : RekapNilaiClassData

  constructor() { }

  ngOnInit(): void {
    document.getElementById("side").className="active";
    
    this.rekapNilaiClass = [
      {
        noUrut :1,
        kelasKode : "X123",
        namaTrainer : "Imam Farisi",
        namaCourse : "Java"
      },
      {
        noUrut :2,
        kelasKode : "X124",
        namaTrainer : "Albus Dumbledore",
        namaCourse : "Java"
      },
      {
        noUrut :1,
        kelasKode : "K209",
        namaTrainer : "Albert Einstein",
        namaCourse : "Phyton"
      },
    ]
  }

  onRowSelect(event){
    this.rekapNilaiClass1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : RekapNilaiClassData){
    let rekapNilaiClass = {};
    for(let prop in d){
      rekapNilaiClass[prop] = d[prop];
    }
    return d;
  }

}
