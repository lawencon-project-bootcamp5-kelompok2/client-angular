import {Component, OnInit} from '@angular/core';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';

@Component({
  selector: 'app-detail-materi',
  templateUrl: './detail-materi.component.html',
  styleUrls: ['./detail-materi.component.scss']
})
export class DetailMateriComponent implements OnInit {

  idSubcourse: any;
  subcourse: Subcourse;

  constructor(private route: ActivatedRoute, private materiService: MateriService, private subcourseService: SubcourseService) {
  }

  ngOnInit() {
    document.getElementById("sideEnroll").className="active";

    this.route.queryParams.subscribe(params =>
      this.idSubcourse = params.idSubcourse
    );

    this.subcourseService.getSubcourseById(this.idSubcourse).subscribe(
      result => this.subcourse = result,
      err => console.log(err)            
    );
  }

  onClick(){
    // this.materiService.downloadFile(this.subcourse.idMateri.idMateri).subscribe(blob => {
    //   saveAs(blob);
    // })
  }

}
