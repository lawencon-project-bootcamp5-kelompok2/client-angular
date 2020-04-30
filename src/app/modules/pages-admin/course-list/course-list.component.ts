import { Component, OnInit } from '@angular/core';
import { CourseData } from '../course-data';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  course : Course[]
  course1 : Course
  selectedRow : Course
  idCourse: any
  private updateSubscription : Subscription

  constructor(private courseService : CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.getDataCourse()
    this.courseService.getCourse().subscribe( result => {
      this.course = result
    });

    this.route.queryParams.subscribe(result => {
      this.idCourse = result.idCourse
    });

    document.getElementById("side").className="active";

    // this.updateSubscription = interval(1000).subscribe( val => {
    //   this.getCourse()
    // })
  }

  onRowSelect(event){
    this.course1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Course){
    let course = {};
    for(let prop in d){
      course[prop] = d[prop];
    }
    return d;
  }

  getDataCourse(){
    let resp = this.courseService.getCourse()
    resp.subscribe(
      (data)=>this.course = data,
      (err)=>console.log("Ada error : "+err),
      ()=>console.log("Complete")
    )
  }

  onDelete(){
    this.courseService.deleteCourse(this.idCourse).subscribe( result => {
        this.router.navigate(['./'])
      }, err => console.log(err),
      () => console.log("delete success")    
    );
  }

  getCourse(){
    this.courseService.getCourse().subscribe(res => {
      this.course = res
    })
  }

}
