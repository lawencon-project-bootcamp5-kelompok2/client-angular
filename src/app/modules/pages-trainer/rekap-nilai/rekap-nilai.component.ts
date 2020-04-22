import { Component, OnInit } from '@angular/core';
import { RekapNilaiData } from '../rekapNilai-data';

@Component({
  selector: 'app-rekap-nilai',
  templateUrl: './rekap-nilai.component.html',
  styleUrls: ['./rekap-nilai.component.scss']
})
export class RekapNilaiComponent implements OnInit {

  rekapNilai : RekapNilaiData[]
  rekapNilai1 : RekapNilaiData
  selectedRow : RekapNilaiData

  constructor() { }

  ngOnInit(): void {
    this.rekapNilai = [
      {
        npm: 234234324,
        namaStudent : "Cloud Strife",
        nilai : 78,
        grade : "C"
      },
      {
        npm: 234233344,
        namaStudent : "Didi Kempot",
        nilai : 90,
        grade : "A"
      },
      {
        npm: 234234578,
        namaStudent : "Valentino Rossi",
        nilai : 83,
        grade : "B"
      },
    ]
  }

  onRowSelect(event){
    this.rekapNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : RekapNilaiData){
    let rekapNilai = {};
    for(let prop in d){
      rekapNilai[prop] = d[prop];
    }
    return d;
  }

}
