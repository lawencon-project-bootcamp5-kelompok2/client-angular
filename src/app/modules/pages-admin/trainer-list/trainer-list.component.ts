import { Component, OnInit } from '@angular/core';
import { TrainerData } from '../trainer-data';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {

  trainer : TrainerData[]
  trainer1 : TrainerData
  selectedRow : TrainerData

  constructor() { }

  ngOnInit(): void {
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
