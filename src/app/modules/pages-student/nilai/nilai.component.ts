import {Component, OnInit} from '@angular/core';
import { Jawaban } from 'src/app/model/jawaban';

@Component({
  selector: 'app-nilai',
  templateUrl: './nilai.component.html',
  styleUrls: ['./nilai.component.scss']
})
export class NilaiComponent implements OnInit {

  aaa : Jawaban[];
  aaa1: Jawaban;
  cols: any[];
  selectedRow: Jawaban;
  detailNilais : Jawaban[];
  idForDetail : number;

  constructor() {
  }

  ngOnInit() {
    // this.aaa = [
    //   {
    //     id:1,
    //     enroll:"Java",
    //     instruktur:"Imam Farisi",
    //     nilai:88,
    //     grade:"A"
    //   },
    //   {
    //     id:1,
    //     enroll:"PHP",
    //     instruktur:"Albert Einstein",
    //     nilai:80,
    //     grade:"A"
    //   }
    // ];

    this.cols = [
      {field:"enroll", header:"Enroll"},
      {field:"instruktur", header:"Instuktur"},
      {field:"nilai", header:"Nilai"},
      {field:"grade", header:"Grade"},
    ];
  }

  onRowSelect(event) {
    // this.aaa1 = this.cloneSelection(event.data);
  }

  // cloneSelection(d : Nilai){
  //   let dash = {};
  //   for(let prop in d){
  //     dash[prop] = d[prop];
  //   }
  //   return d;
  // }

}
