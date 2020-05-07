import { Component, OnInit } from '@angular/core';
import { ListMateriData } from '../listMateri-data';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';

@Component({
  selector: 'app-rekap-absensi-list',
  templateUrl: './rekap-absensi-list.component.html',
  styleUrls: ['./rekap-absensi-list.component.scss']
})
export class RekapAbsensiListComponent implements OnInit {

  listMateri : ListMateriData[]
  listMateri1 : ListMateriData
  selectedRow : ListMateriData

  idKelas : string
  namaCourse : string
  kelas : Kelas
  subcourse : Subcourse[]

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService, private kelasService: KelasService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
      this.namaCourse = params.namaCourse
    });

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    this.subcourseService.getSubcourseByCourse(this.namaCourse).subscribe(
      result => {
        this.subcourse = result;
    });

  }

  onRowSelect(event){
    this.listMateri1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let subcourse = {};
    for(let prop in d){
      subcourse[prop] = d[prop];
    }
    return d;
  }

}
