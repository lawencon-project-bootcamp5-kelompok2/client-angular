import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: Course = new Course();
  subcourse: Subcourse[];
  courses: Course[];
  idCourse: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService,
    private subcourseService: SubcourseService) { }

  editClick : boolean = false;
  dataNotNull : boolean = true;
  buttonEdit : string = 'Edit Deskripsi';


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCourse = +params['idCourse'];
    })

    this.courseService.getCourseById(this.idCourse).subscribe(
      result => {
        this.course = result;
    });

    this.subcourseService.getSubcourseByCourse(this.idCourse).subscribe(
      result => {
        this.subcourse = result;
    });
  }

  editDeskripsi(){
    if (this.editClick) {
      this.editClick = false
      this.buttonEdit = 'Edit Deskripsi'
    }else{
      this.editClick = true
      this.buttonEdit = 'Kembali'
    }
  }

  onTambahMateri(){
    // this.route.navigate(['../addsubcourse']);
  }

}
