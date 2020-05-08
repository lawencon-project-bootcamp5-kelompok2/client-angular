import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { TrainerService } from 'src/app/service/trainer.service';
import { Course } from 'src/app/model/course';
import { Trainer } from 'src/app/model/trainer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  idCourse: any
  course: Course = new Course()
  courseInput = new Course()
  trainer: Trainer[]

  constructor(private route: ActivatedRoute, private courseService: CourseService, 
    private trainerService: TrainerService, private location : Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idCourse = params.idCourse
    })

    this.trainerService.getTrainer().subscribe( res => {
      this.trainer = res
    })

    this.courseInput.idCourse = this.idCourse
    this.courseService.getCourseById(this.idCourse).subscribe(res => {
      this.course = res
    })

    document.getElementById("side").className="active";

  }

  onSubmit(){
    this.courseService.updateCourse(this.courseInput).subscribe(res => {
            
      }, err => console.log(err))
  }

  prevPage(){
    this.location.back();
  }

}
