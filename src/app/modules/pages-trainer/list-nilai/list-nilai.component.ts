import { Component, OnInit } from '@angular/core';
import { FormNilai } from '../form-nilai';

@Component({
  selector: 'app-list-nilai',
  templateUrl: './list-nilai.component.html',
  styleUrls: ['./list-nilai.component.scss']
})
export class ListNilaiComponent implements OnInit {

  formNilai : FormNilai[];
  formNilai1 : FormNilai
  cols : any[]
  selectedRow: FormNilai 
  notifNilai : string

  constructor() { }

  ngOnInit(): void {
    this.formNilai = [
      {
        noUrut:1,
        npm: "342342342",
        namaStudent : "Cloud Strife",
        fileLink : "#",
        nilaiForm : null
      },
      {
        noUrut:2,
        npm: "43534534",
        namaStudent : "Dr Neo Cortex",
        fileLink : "#",
        nilaiForm : 80
      }
    ]

    this.cols = [
      {field: "noUrut", header:"No"},
      {field: "npm", header:"NPM"},
      {field: "namaStudent", header:"Nama Student"},
      {field: "fileLink", header:"Link File Test"},
      {field: "nilaiForm", header:"Nilai"}
    ]
  }

  onRowSelect(event){
    this.formNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : FormNilai){
    let formNilai = {};
    for(let prop in d){
      formNilai[prop] = d[prop];
    }
    return d;
  }

}
