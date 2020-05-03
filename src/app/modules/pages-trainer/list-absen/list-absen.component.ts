import { Component, OnInit } from '@angular/core';
import { Absen } from '../absen';
import { ActivatedRoute } from '@angular/router';
import { AbsensiService } from 'src/app/service/absensi.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Kelas } from 'src/app/model/kelas';

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
  idSubcourse
  idKelas
  detail
  subcourse: Subcourse
  kelas: Kelas

  constructor(private route: ActivatedRoute, private absensiService: AbsensiService, private subcourseService: SubcourseService,
    private kelasService: KelasService) { }

  ngOnInit(): void {
    document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse;
      this.idKelas = params.idKelas;
    });

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => {
        this.subcourse = result;
      }
    )

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    this.absensiService.getDetailAbsen(this.idSubcourse, this.idKelas).subscribe(
      result => {
        this.detail = result;
      }
    )


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

  cloneSelection(d : any){
    let detail = {};
    for(let prop in d){
      detail[prop] = d[prop];
    }
    return d;
  }

}
