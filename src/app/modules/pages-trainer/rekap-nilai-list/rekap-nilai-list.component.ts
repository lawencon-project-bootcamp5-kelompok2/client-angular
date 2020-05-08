import { Component, OnInit } from '@angular/core';
import { ListMateriData } from '../listMateri-data';
import { RekapNilaiData } from '../rekapNilai-data';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';
import { KelasService } from 'src/app/service/kelas.service';

@Component({
  selector: 'app-rekap-nilai-list',
  templateUrl: './rekap-nilai-list.component.html',
  styleUrls: ['./rekap-nilai-list.component.scss']
})
export class RekapNilaiListComponent implements OnInit {

  listMateri : ListMateriData[]
  listMateri1 : ListMateriData
  selectedRow : ListMateriData

  rekapNilai : RekapNilaiData[]
  rekapNilai1 : RekapNilaiData
  selectedRow1 : RekapNilaiData

  idKelas : string
  namaCourse : string
  kelas : Kelas
  subcourse : Subcourse[]

  constructor(private route: ActivatedRoute, private kelasService: KelasService, private subcourseService: SubcourseService) { }

  ngOnInit(): void {
    // document.getElementById("sideRekapNilai").className="active";

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
    
    this.rekapNilai = [
      {
        npm: 234234324,
        namaStudent : "Cloud Strife",
        nilai : 78,
        grade : "C"
      },
      {
        npm: 234233344,
        namaStudent : "Didi Kempot",
        nilai : 90,
        grade : "A"
      },
      {
        npm: 234234578,
        namaStudent : "Valentino Rossi",
        nilai : 83,
        grade : "B"
      },
    ]
  }

  onRowSelect(event){
    this.listMateri1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : ListMateriData){
    let listMateri = {};
    for(let prop in d){
      listMateri[prop] = d[prop];
    }
    return d;
  }

  onRowSelect1(event){
    this.rekapNilai1 = this.cloneSelection1(event.data);
  }

  cloneSelection1(d : RekapNilaiData){
    let rekapNilai = {};
    for(let prop in d){
      rekapNilai[prop] = d[prop];
    }
    return d;
  }

}
