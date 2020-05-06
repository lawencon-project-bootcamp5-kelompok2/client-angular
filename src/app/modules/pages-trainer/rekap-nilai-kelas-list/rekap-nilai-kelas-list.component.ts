import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';

@Component({
  selector: 'app-rekap-nilai-kelas-list',
  templateUrl: './rekap-nilai-kelas-list.component.html',
  styleUrls: ['./rekap-nilai-kelas-list.component.scss']
})
export class RekapNilaiKelasListComponent implements OnInit {

  kelas : Kelas[]
  kelas1 : Kelas
  selectedRow : Kelas

  constructor() { }

  ngOnInit(): void {
    this.kelas = [
      {
        idKelas : "dummy",
        kodeKelas : "dummy",
        course : null,
        deskripsi : "ini dummy",
        openKelas : "10:00" 
      }
    ]
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  } 

}
