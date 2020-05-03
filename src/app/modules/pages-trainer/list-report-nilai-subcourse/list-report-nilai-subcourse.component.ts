import { Component, OnInit } from '@angular/core';
import { PilihNilai } from '../pilihNilai';
import { ActivatedRoute } from '@angular/router';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';

@Component({
  selector: 'app-list-report-nilai-subcourse',
  templateUrl: './list-report-nilai-subcourse.component.html',
  styleUrls: ['./list-report-nilai-subcourse.component.scss']
})
export class ListReportNilaiSubcourseComponent implements OnInit {

  pNilai : PilihNilai[]
  pNilai1 : PilihNilai
  cols : any[]
  selectedRow: PilihNilai

  idKelas: string
  kelas: Kelas
  subcourse: Subcourse[]

  constructor(private route: ActivatedRoute, private kelasService: KelasService, private subcourseService: SubcourseService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
    });

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    this.subcourseService.getSubcourseByKelas(this.idKelas).subscribe(
      result => {
        this.subcourse = result;
      }
    )
  }

  onRowSelect(event){
    this.pNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let subcourse = {};
    for(let prop in d){
      subcourse[prop] = d[prop];
    }
    return d;
  }

}
