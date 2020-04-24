import { Component, OnInit } from '@angular/core';
import { AbsenTrainerData } from '../absenTrainer-data';

@Component({
  selector: 'app-rekap-absen-trainer',
  templateUrl: './rekap-absen-trainer.component.html',
  styleUrls: ['./rekap-absen-trainer.component.scss']
})
export class RekapAbsenTrainerComponent implements OnInit {

  absenTrainer : AbsenTrainerData[]
  absenTrainer1 : AbsenTrainerData
  selectedRow : AbsenTrainerData

  constructor() { }

  ngOnInit(): void {
    this.absenTrainer = [
      {
        pertemuan : 1,
        tgl : "21/4/2020",
        materi : "Java Basic",
        absensi : "Hadir"
      },
      {
        pertemuan : 2,
        tgl : "22/4/2020",
        materi : "Java Basic",
        absensi : "Hadir"
      },
      {
        pertemuan : 3,
        tgl : "23/4/2020",
        materi : "Java Basic",
        absensi : "Hadir"
      },
      {
        pertemuan : 4,
        tgl : "24/4/2020",
        materi : "Java Basic",
        absensi : "Hadir"
      },
      {
        pertemuan : 5,
        tgl : "25/4/2020",
        materi : "OOP",
        absensi : "Hadir"
      }
    ]
  }

  onRowSelect(event){
    this.absenTrainer1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : AbsenTrainerData){
    let absenTrainer = {};
    for(let prop in d){
      absenTrainer[prop] = d[prop];
    }
    return d;
  }

}
