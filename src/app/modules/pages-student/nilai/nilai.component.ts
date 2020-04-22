import {Component, OnInit} from '@angular/core';
import { Nilai } from '../nilai';
import { Details } from '../detailNilai';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  aaa : Nilai[];
  aaa1: Nilai;
  cols: any[];
  selectedRow: Nilai;
  detailNilais : Details[];
  idForDetail : number;

  constructor() {
  }

  ngOnInit() {
    this.aaa = [
      {
        id:1,
        enroll:"Java",
        instruktur:"Imam Farisi",
        nilai:88,
        grade:"A"
      },
      {
        id:1,
        enroll:"PHP",
        instruktur:"Albert Einstein",
        nilai:80,
        grade:"A"
      }
    ];

    this.cols = [
      {field:"enroll", header:"Enroll"},
      {field:"instruktur", header:"Instuktur"},
      {field:"nilai", header:"Nilai"},
      {field:"grade", header:"Grade"},
    ];
  }

  onRowSelect(event) {
    this.aaa1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Nilai){
    let dash = {};
    for(let prop in d){
      dash[prop] = d[prop];
    }
    return d;
  }

}
