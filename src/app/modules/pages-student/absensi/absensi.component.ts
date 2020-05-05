import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { stringify } from 'querystring';
import { KelasService } from 'src/app/service/kelas.service';
import { AbsensiService } from 'src/app/service/absensi.service';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { Absensi } from 'src/app/model/absensi';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.scss']
})
export class AbsensiComponent implements OnInit {
  idSubcourse: any;
  subcourse: Subcourse = new Subcourse();
  absen= new Absensi();

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService,
    private absenService: AbsensiService, private pertemuanService: PertemuanService) {
  }

  ngOnInit() {
    document.getElementById("sideEnroll").className="active";
    
    this.route.queryParams.subscribe(params => 
      this.idSubcourse = params.idSubcourse
    );

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => this.subcourse = result,
      err => console.log(err),
      () => console.log("done!")      
    );

    // this.absen.idSubcourse = this.idSubcourse;
    // this.absen.idStudent.idStudent = 1;
    // this.absen.pertemuan.idPertemuan = 1;
    // this.absen.status = false;
    // this.absen.tanggal = "27-04-2020";
  }

  onAbsensi(){
    this.absenService.addAbsen(this.absen).subscribe(res => {});
  }

}
