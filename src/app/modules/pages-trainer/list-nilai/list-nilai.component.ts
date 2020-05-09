import { Component, OnInit } from '@angular/core';
import { FormNilai } from '../form-nilai';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';
import { JawabanService } from 'src/app/service/jawaban.service';
import { Jawaban } from 'src/app/model/jawaban';
import { FileJawabanService } from 'src/app/service/file-jawaban.service';
import { TestService } from 'src/app/service/test.service';
import { Test } from 'src/app/model/test';
import { saveAs } from 'file-saver';
import { FormGroup, FormArray } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';
import { toTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-list-nilai',
  templateUrl: './list-nilai.component.html',
  styleUrls: ['./list-nilai.component.scss']
})
export class ListNilaiComponent implements OnInit {

  formNilai : FormNilai[];
  formNilai1 : FormNilai;
  cols : any[];
  selectedRow: FormNilai;
  notifNilai : string;

  idKelas : string;
  idSubcourse : string;
  kelas : Kelas = new Kelas();
  subcourse : Subcourse = new Subcourse();
  formInput : any;
  jawaban : Jawaban[] = [];
  inputNilai: Jawaban;
  test: Test = new Test();
  idTest: any;

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService, private kelasService: KelasService,
    private jawabanService: JawabanService, private fileJawabanService: FileJawabanService, private testService: TestService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      this.idKelas = params.idKelas;
      this.idSubcourse = params.idSubcourse;

      this.testService.getTestBySubcourse(this.idSubcourse).subscribe( res => {      
        this.idTest = {
          "idTest" : {
            "idTest" : res[0].idTest
          }
        }
        
        this.jawabanService.getJawabanByTest(this.idTest).subscribe(res => {
          this.jawaban = res;
        }, err => {
          console.log(err);
        })
      }, err => {
        console.log(err);
      });

      this.kelasService.getKelasById(this.idKelas).subscribe(
        result => {
          this.kelas = result;
        }
      );
    });

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

  downloadJawaban(idJawaban){
    this.fileJawabanService.downloadFile(idJawaban).subscribe(result => {
      saveAs(result);
    }, error => {
      console.log(error);
    })
  }

  onSubmit(){
    for(let nilai in this.jawaban){
      this.jawabanService.getJawabanById(this.jawaban[nilai].idJawaban).subscribe(res => {
        this.inputNilai = res
        this.inputNilai.nilai = this.jawaban[nilai].nilai;
        this.jawabanService.updateJawaban(this.inputNilai).subscribe(res => {
          console.log("update sukses!");
        }, err => {
          console.log("update gagal!");
          console.log(err);
        })
      })
    }
  }
}
