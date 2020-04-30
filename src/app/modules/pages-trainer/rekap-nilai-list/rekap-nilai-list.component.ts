import { Component, OnInit } from '@angular/core';
import { ListMateriData } from '../listMateri-data';
import { RekapNilaiData } from '../rekapNilai-data';

@Component({
  selector: 'app-rekap-nilai-list',
  templateUrl: './rekap-nilai-list.component.html',
  styleUrls: ['./rekap-nilai-list.component.scss']
})
export class RekapNilaiListComponent implements OnInit {

  listMateri : ListMateriData[]
  listMateri1 : ListMateriData
  selectedRow : ListMateriData

  rekapNilai : RekapNilaiData[]
  rekapNilai1 : RekapNilaiData
  selectedRow1 : RekapNilaiData

  constructor() { }

  ngOnInit(): void {
    document.getElementById("sideRekapNilai").className="active";
    
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
    this.listMateri1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : ListMateriData){
    let listMateri = {};
    for(let prop in d){
      listMateri[prop] = d[prop];
    }
    return d;
  }

  onRowSelect1(event){
    this.rekapNilai1 = this.cloneSelection1(event.data);
  }

  cloneSelection1(d : RekapNilaiData){
    let rekapNilai = {};
    for(let prop in d){
      rekapNilai[prop] = d[prop];
    }
    return d;
  }

}
