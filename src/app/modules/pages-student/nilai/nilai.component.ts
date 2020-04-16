import {Component, OnInit} from '@angular/core';
import { Nilai } from '../nilai';

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
  constructor() {
  }

  ngOnInit() {
    this.aaa = [
      {
        enroll:"Java",
        instruktur:"Imam Farisi",
        nilai:88,
        grade:"A"
      },
      {
        enroll:"PHP",
        instruktur:"Albert Einstein",
        nilai:80,
        grade:"A"
      }
    ]
    this.cols = [
      {field:"enroll", header:"Enroll"},
      {field:"instruktur", header:"Instuktur"},
      {field:"nilai", header:"Nilai"},
      {field:"grade", header:"Grade"},
    ]
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
