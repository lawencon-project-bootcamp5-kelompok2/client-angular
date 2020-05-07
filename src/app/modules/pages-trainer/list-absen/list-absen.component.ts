import { Component, OnInit } from '@angular/core';
import { Absen } from '../absen';
import { ActivatedRoute } from '@angular/router';
import { AbsensiService } from 'src/app/service/absensi.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { KelasService } from 'src/app/service/kelas.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Kelas } from 'src/app/model/kelas';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Pertemuan } from 'src/app/model/pertemuan';
import { Absensi } from 'src/app/model/absensi';
import { MessageService } from 'primeng/api';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-list-absen',
  templateUrl: './list-absen.component.html',
  styleUrls: ['./list-absen.component.scss']
})
export class ListAbsenComponent implements OnInit {

  tableIsEmpty = true;
  absensi: Absensi[] = [new Absensi()];
  absensi2: Absensi = new Absensi();
  absen : Absen[];
  absen1: Absen;
  cols : any[];
  selectedRow: Absen;
  idSubcourse
  idKelas
  detail
  pertemuan: Pertemuan = new Pertemuan();
  kelas: Kelas = new Kelas();
  idPertemuan
  absenInput : Absen = new Absen();
  updateSubscription : Subscription;

  constructor(private route: ActivatedRoute, private absensiService: AbsensiService, private subcourseService: SubcourseService,
    private kelasService: KelasService, private pertemuanService: PertemuanService, private messageService: MessageService) { }

  ngOnInit(): void {
    // document.getElementById("sideKelas").className="active";

    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas;
      this.idPertemuan = params.idPertemuan;
    });

    // this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
    //   result => {
    //     this.subcourse = result;
    //   }, err => {
    //     console.log(err);
    //   }
    // )

    this.pertemuanService.getPertemuanById(this.idPertemuan).subscribe( res => {
      this.pertemuan = res
    })

    this.kelasService.getKelasById(this.idKelas).subscribe(
      result => {
        this.kelas = result;
      }
    )

    // this.absensiService.getDetailAbsen(this.idSubcourse, this.idKelas).subscribe(
    //   result => {
    //     this.detail = result;
    //   }
    // )

    this.updateSubscription = interval(1000).subscribe( val => {
      this.getAbsen();
    })
  }

  getAbsen() {
    this.absensiService.getAbsenByPertemuan(this.idPertemuan).subscribe( result => {
      this.absen = result;
    }, err => {
      console.log(err);
    });
  }

  onAccept() {
    // this.absenInput.status = "hadir";
    // this.absenInput

    this.absensiService.updateAbsen(this.absen1).subscribe( res => {
      console.log("update success");
    }, err => {
      console.log(this.absen1);
    })
  }

  confirmDialog(idAbsen) {
    this.absensiService.getAbsenById(idAbsen).subscribe( res => {
      this.absen1 = res;
    }, err => {
      console.log(err);      
    });

    // this.absensi2.idAbsensi = idAbsen;
    
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Upload Materi Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Upload Materi Gagal!'})
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
