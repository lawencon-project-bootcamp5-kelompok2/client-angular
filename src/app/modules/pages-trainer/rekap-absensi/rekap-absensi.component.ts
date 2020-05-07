import { Component, OnInit } from '@angular/core';
import { RekapAbsenData } from '../rekapAbsen-data';
import { ActivatedRoute } from '@angular/router';
import { AbsensiService } from 'src/app/service/absensi.service';
import { KelasService } from 'src/app/service/kelas.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';
import { Pertemuan } from 'src/app/model/pertemuan';
import { PertemuanService } from 'src/app/service/pertemuan.service';

@Component({
  selector: 'app-rekap-absensi',
  templateUrl: './rekap-absensi.component.html',
  styleUrls: ['./rekap-absensi.component.scss']
})
export class RekapAbsensiComponent implements OnInit {

  rekapAbsen1 : RekapAbsenData
  selectedRow : RekapAbsenData

  idPertemuan : string
  idSubcourse : string
  idKelas : string
  rekapAbsen : any
  kelas : Kelas
  subcourse : Subcourse
  pertemuan : Pertemuan

  constructor(private route: ActivatedRoute, private absensiService: AbsensiService, private kelasService: KelasService, private subcourseService: SubcourseService,
    private pertemuanService: PertemuanService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idPertemuan = params.idPertemuan;
      this.idSubcourse = params.idSubcourse;
      this.idKelas = params.idKelas;
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

    this.absensiService.getByPertemuan(this.idPertemuan, this.idSubcourse, this.idKelas).subscribe(
      result => {
        this.rekapAbsen = result;
      }
    )

    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe(
      result => {
        this.pertemuan = result;
      }
    )
  }

  onSubmit(){
    this.absensiService.getReport(this.idKelas, this.idPertemuan).subscribe(result => {
      const file = new Blob([result], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }, err => console.log(err),
    )
  }

  onRowSelect(event){
    this.rekapAbsen1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let rekapAbsen = {};
    for(let prop in d){
      rekapAbsen[prop] = d[prop];
    }
    return d;
  }

}
