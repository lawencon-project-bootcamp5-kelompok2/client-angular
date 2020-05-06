import { Component, OnInit } from '@angular/core';
import { KelasData } from '../kelas-data';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';

@Component({
  selector: 'app-list-rekap-class',
  templateUrl: './list-rekap-class.component.html',
  styleUrls: ['./list-rekap-class.component.scss']
})
export class ListRekapClassComponent implements OnInit {
  kelas : Kelas[]
  kelas1 : Kelas
  selectedRow : Kelas

  constructor(private kelasService: KelasService) { }

  ngOnInit(): void {
    this.getData()

    document.getElementById("side").className="active";
  }

  getData(){
    this.kelasService.getKelas().subscribe(
      data => this.kelas = data,
      err => console.log("Ada Error : "+err),
      () => console.log("Complete")
    )
  }

  onSubmit(){
    this.kelasService.reportKelas().subscribe(result => {
      const file = new Blob([result], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }, err => console.log(err),
    )
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Kelas){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  }

}
