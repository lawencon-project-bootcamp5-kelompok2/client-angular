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

    // this.listMateri = [
    //   {
    //     noUrut:1,
    //     namaMateri : "Java Basic",
    //     tglMulai : "21-4-2020",
    //     tglSelesai : "24-4-2020"
    //   },
    //   {
    //     noUrut:2,
    //     namaMateri : "OOP",
    //     tglSelesai : "26-4-2020",
    //     tglMulai : "25-4-2020"
    //   },
    //   {
    //     noUrut:3,
    //     namaMateri : "Java Features",
    //     tglSelesai : "28-4-2020",
    //     tglMulai : "27-4-2020"
    //   }
    // ]

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

  // cloneSelection(d : ListMateriData){
  //   let listMateri = {};
  //   for(let prop in d){
  //     listMateri[prop] = d[prop];
  //   }
  //   return d;
  // }

  cloneSelection(d : any){
    let subcourse = {};
    for(let prop in d){
      subcourse[prop] = d[prop];
    }
    return d;
  }

}
