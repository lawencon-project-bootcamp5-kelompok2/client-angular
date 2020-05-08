import { Component, OnInit } from '@angular/core';
import { FormNilai } from '../form-nilai';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';

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

  idKelas : string
  idSubcourse : string
  kelas : Kelas
  subcourse : Subcourse
  formInput : any

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService, private kelasService: KelasService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
      this.idSubcourse = params.idSubcourse
    });

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => {
        this.subcourse = result;
    });

    this.subcourseService.getInputNilai(this.idSubcourse, this.idKelas).subscribe(
      result => {
        this.formInput = result;
      }
    )

  }

  onRowSelect(event){
    this.formNilai1 = this.cloneSelection(event.data);
  }

  // cloneSelection(d : FormNilai){
  //   let formNilai = {};
  //   for(let prop in d){
  //     formNilai[prop] = d[prop];
  //   }
  //   return d;
  // }

  cloneSelection(d : any){
    let formInput = {};
    for(let prop in d){
      formInput[prop] = d[prop];
    }
    return d;
  }

}
