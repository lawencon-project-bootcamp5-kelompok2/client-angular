import { Component, OnInit } from '@angular/core';
import { TrainerData } from '../trainer-data';

@Component({
  selector: 'app-rekap-absen-trainer-list',
  templateUrl: './rekap-absen-trainer-list.component.html',
  styleUrls: ['./rekap-absen-trainer-list.component.scss']
})
export class RekapAbsenTrainerListComponent implements OnInit {
  trainer : TrainerData[]
  trainer1 : TrainerData
  selectedRow : TrainerData

  constructor() { }

  ngOnInit(): void {
    document.getElementById("side").className="active";
    
    this.trainer = [
      {
        noUrut:1,
        nik:"234234234",
        namaTrainer : "Imam Farisi",
        email : "imamfarisi@lawencon.com"
      },
      {
        noUrut:2,
        nik:"124567656",
        namaTrainer : "Albert Einstein",
        email : "einstein@gmail.com"
      }
    ]
  }

  onRowSelect(event){
    this.trainer1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : TrainerData){
    let trainer = {};
    for(let prop in d){
      trainer[prop] = d[prop];
    }
    return d;
  }
}
