import { Component, OnInit } from '@angular/core';
import { Pertemuan } from 'src/app/model/pertemuan';
import { DatePipe } from '@angular/common';
import { KelasService } from 'src/app/service/kelas.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { ActivatedRoute } from '@angular/router';
import { Kelas } from 'src/app/model/kelas';
import { Subcourse } from 'src/app/model/subcourse';

@Component({
  selector: 'app-rekap-absensi-pertemuan-list',
  templateUrl: './rekap-absensi-pertemuan-list.component.html',
  styleUrls: ['./rekap-absensi-pertemuan-list.component.scss']
})
export class RekapAbsensiPertemuanListComponent implements OnInit {

  pertemuan1 : Pertemuan
  selectedRow : Pertemuan

  idKelas: string
  idSubcourse: string
  kelas: Kelas
  subcourse: Subcourse
  pertemuan: Pertemuan[]

  constructor(private route: ActivatedRoute, private kelasService: KelasService, private subcourseService: SubcourseService, private pertemuanService: PertemuanService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
      this.idSubcourse = params.idSubcourse;
    });

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => {
        this.subcourse = result;
      }
    )

    this.pertemuanService.getPertemuanBySubcourse(this.idSubcourse).subscribe(
      result => {
        this.pertemuan = result;
      }
    )
  }

  pipeDate(tgl : Date) : string{
    let pipe = new DatePipe('en-US')
    let getToday = pipe.transform(tgl, "dd-MM-yyyy")
    return getToday
  }

  onRowSelect(event){
    this.pertemuan1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let pertemuan = {};
    for(let prop in d){
      pertemuan[prop] = d[prop];
    }
    return d;
  }

}
