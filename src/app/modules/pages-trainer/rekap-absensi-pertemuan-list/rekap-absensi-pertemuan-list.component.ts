import { Component, OnInit } from '@angular/core';
import { Pertemuan } from 'src/app/model/pertemuan';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rekap-absensi-pertemuan-list',
  templateUrl: './rekap-absensi-pertemuan-list.component.html',
  styleUrls: ['./rekap-absensi-pertemuan-list.component.scss']
})
export class RekapAbsensiPertemuanListComponent implements OnInit {

  pertemuan : Pertemuan[]
  pertemuan1 : Pertemuan
  selectedRow : Pertemuan

  constructor() { }

  ngOnInit(): void {
    //sample
    this.pertemuan = [
      {
        pertemuan : "1",
        tanggalPertemuan : "2020-05-06",
        idMateri : null,
        idPertemuan : "aischlkashc",
        idSubcourse : null
      }
    ]
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
