import { Component, OnInit } from '@angular/core';
import { KelasData } from '../kelas-data';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  // kelas : KelasData[]
  kelas1 : KelasData
  selectedRow : KelasData
  kelas : Kelas[];

  constructor(private kelasService: KelasService) { }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result
    });

    // document.getElementById("sideClass").className="active";
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : KelasData){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  }

}
