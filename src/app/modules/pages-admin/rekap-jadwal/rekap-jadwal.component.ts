import { Component, OnInit } from '@angular/core';
import { JadwalPerCourseData } from '../jadwalPerCourse-data';

@Component({
  selector: 'app-rekap-jadwal',
  templateUrl: './rekap-jadwal.component.html',
  styleUrls: ['./rekap-jadwal.component.scss']
})
export class RekapJadwalComponent implements OnInit {

  jadwalPerCourse : JadwalPerCourseData[]
  jadwalPerCourse1 : JadwalPerCourseData
  selectedRow : JadwalPerCourseData

  constructor() { }

  ngOnInit(): void {
    this.jadwalPerCourse = [
      {
        noUrut:1,
        kelasKode : "X123",
        namaTrainer : "Imam Farisi",
        namaMateri : "Java Basic",
        tgl : "21/4/2020"
      },
      {
        noUrut:1,
        kelasKode : "X123",
        namaTrainer : "Imam Farisi",
        namaMateri : "Java Basic",
        tgl : "21/4/2020"
      },
      {
        noUrut:2,
        kelasKode : "X123",
        namaTrainer : "Imam Farisi",
        namaMateri : "Java Basic",
        tgl : "22/4/2020"
      },
      {
        noUrut:3,
        kelasKode : "X124",
        namaTrainer : "Albus Dumbledore",
        namaMateri : "Java Basic",
        tgl : "21/4/2020"
      },
      {
        noUrut:4,
        kelasKode : "X124",
        namaTrainer : "Albus Dumbledore",
        namaMateri : "OOP",
        tgl : "24/4/2020"
      },
      {
        noUrut:5,
        kelasKode : "X125",
        namaTrainer : "Albert Einstein",
        namaMateri : "Java Basic",
        tgl : "21/4/2020"
      },
    ]
  }

  onRowSelect(event){
    this.jadwalPerCourse1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : JadwalPerCourseData){
    let jadwalPerCourse = {};
    for(let prop in d){
      jadwalPerCourse[prop] = d[prop];
    }
    return d;
  }

}
