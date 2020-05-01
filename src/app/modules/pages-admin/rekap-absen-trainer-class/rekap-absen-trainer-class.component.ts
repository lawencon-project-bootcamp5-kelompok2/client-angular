import { Component, OnInit } from '@angular/core';
import { KelasData } from '../kelas-data';

@Component({
  selector: 'app-rekap-absen-trainer-class',
  templateUrl: './rekap-absen-trainer-class.component.html',
  styleUrls: ['./rekap-absen-trainer-class.component.scss']
})
export class RekapAbsenTrainerClassComponent implements OnInit {

  kelas : KelasData[]
  kelas1 : KelasData
  selectedRow : KelasData

  constructor() { }

  ngOnInit(): void {
    document.getElementById("side").className="active";
    this.kelas = [
      {
        noUrut : 1,
        kelasKode : "X123",
        namaCourse : "Java",
        namaTrainer : "Imam Farisi"
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
