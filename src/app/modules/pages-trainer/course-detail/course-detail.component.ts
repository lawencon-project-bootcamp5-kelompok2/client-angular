import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Subcourse } from 'src/app/model/subcourse';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: Course = new Course();
  subcourse: Subcourse[];
  selectSubcourse: Subcourse = new Subcourse();
  courses: Course[];
  idCourse: any;
  idSubcourse: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService,
    private subcourseService: SubcourseService, private materiService: MateriService) { }

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

  onClickMateri(id){
    // this.selectSubcourse = this.cloneSelection(event.data);
    this.materiService.downloadFile(id).subscribe(
      result => {saveAs(result)},
      error => console.log(error)
      
    )
  }

  cloneSelection(s : Subcourse){
    let subcourse = {};
    for(let prop in s){
      subcourse[prop] = s[prop];
    }
    return s;
  }

}
