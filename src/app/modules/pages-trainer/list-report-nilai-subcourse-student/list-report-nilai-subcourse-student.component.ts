import { Component, OnInit } from '@angular/core';
import { NilaiSubCourse } from '../nilaiSubCourse';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { TrainerService } from 'src/app/service/trainer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Subcourse } from 'src/app/model/subcourse';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';

@Component({
  selector: 'app-list-report-nilai-subcourse-student',
  templateUrl: './list-report-nilai-subcourse-student.component.html',
  styleUrls: ['./list-report-nilai-subcourse-student.component.scss']
})
export class ListReportNilaiSubcourseStudentComponent implements OnInit {

  rNilai : NilaiSubCourse[]
  rNilai1 : NilaiSubCourse
  
  selectedRow : NilaiSubCourse

  idSubcourse: any
  idKelas: any
  detail: any
  subcourse: Subcourse
  kelas: Kelas
  nama
  trainer

  constructor(private tokenStorage : TokenStorageService, private route: ActivatedRoute, private subcourseService: SubcourseService, 
    private trainerService: TrainerService, private kelasService: KelasService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.trainerService.getTrainerByEmail(user.email).subscribe(res => {
      this.trainer = res
    })

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

    this.subcourseService.getNilai(this.idSubcourse, this.idKelas).subscribe(
      result => {
        this.detail = result;
      }
    )

    
  }

  onSubmit(){
    this.trainerService.reportTrainer(this.trainer.idTrainer, this.idSubcourse).subscribe(result => {
      const file = new Blob([result], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }, err => console.log(err),
    )
  }

  onRowSelect(event){
    this.rNilai1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let detail = {};
    for(let prop in d){
      detail[prop] = d[prop];
    }
    return d;
  }
}
