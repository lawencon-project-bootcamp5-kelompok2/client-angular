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
    document.getElementById("sideNilai").className="active";

    
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
