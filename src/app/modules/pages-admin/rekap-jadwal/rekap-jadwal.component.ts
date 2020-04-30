import { Component, OnInit } from '@angular/core';
import { JadwalPerCourseData } from '../jadwalPerCourse-data';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { RekapJadwalKelas } from 'src/app/model/rekap-jadwal-kelas';

@Component({
  selector: 'app-rekap-jadwal',
  templateUrl: './rekap-jadwal.component.html',
  styleUrls: ['./rekap-jadwal.component.scss']
})
export class RekapJadwalComponent implements OnInit {

  course : RekapJadwalKelas[]
  course1 : RekapJadwalKelas
  selectedRow : RekapJadwalKelas
  idTemp

  constructor(private activatedRoute : ActivatedRoute, private courseService : CourseService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => this.idTemp = params.id
    )

    this.getData()
  }

  getData(){
    this.courseService.rekapJadwalPerKelas(this.idTemp).subscribe(
      data => this.course = data,
      err => console.log("Ada error : "+err),
      () => console.log("Complete")
    )
  }

  onRowSelect(event){
    this.course1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : RekapJadwalKelas){
    let course = {};
    for(let prop in d){
      course[prop] = d[prop];
    }
    return d;
  }

}
