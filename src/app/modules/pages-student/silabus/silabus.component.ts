import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Subcourse } from 'src/app/model/subcourse';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.scss']
})
export class SilabusComponent implements OnInit {

  idCourse: any;
  subcourse: Subcourse[];
  course: Course = new Course();
  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService) {
  }

  ngOnInit() {
    document.getElementById("sideEnroll").className="active";
    
    this.route.queryParams.subscribe(params => 
      this.idCourse = params.idCourse
    );
    
    this.subcourseService.getSubcourseByCourse(this.idCourse).subscribe(
      result => this.subcourse = result,
      err => console.log(err),
      () => console.log("done!")      
    );
  }

}
