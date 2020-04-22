import { Component, OnInit } from '@angular/core';
import { Absen } from '../absen';

@Component({
  selector: 'app-list-absen',
  templateUrl: './list-absen.component.html',
  styleUrls: ['./list-absen.component.scss']
})
export class ListAbsenComponent implements OnInit {

  tableIsEmpty = true;
  absen : Absen[];
  absen1: Absen;
  cols : any[];
  selectedRow: Absen;


  constructor() { }

  ngOnInit(): void {
    this.absen = [
      {
        noUrut: 1,
        namaStudent: "Harry Potter"
      },
      {
        noUrut: 2,
        namaStudent: "Luke Skywalker"
      }
    ]
    this.cols = [
      {field:"noUrut", header:"No"},
      {field:"namaStudent", header:"Nama Student"}
    ]
  }

  onRowSelect(event) {
    this.absen1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Absen){
    let absen = {};
    for(let prop in d){
      absen[prop] = d[prop];
    }
    return d;
  }

}
