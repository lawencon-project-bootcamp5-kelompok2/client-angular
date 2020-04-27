import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { stringify } from 'querystring';
import { KelasService } from 'src/app/service/kelas.service';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.scss']
})
export class AbsensiComponent implements OnInit {
  idSubcourse: any;
  subcourse: Subcourse = new Subcourse();

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => 
      this.idSubcourse = params.idSubcourse
    );

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => this.subcourse = result,
      err => console.log(err),
      () => console.log("done!")      
    );
  }

}
