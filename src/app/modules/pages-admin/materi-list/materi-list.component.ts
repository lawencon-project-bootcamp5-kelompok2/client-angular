import { Component, OnInit } from '@angular/core';
import { MateriData } from '../materi-data';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/model/subcourse';
import { MessageService } from 'primeng/api';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-materi-list',
  templateUrl: './materi-list.component.html',
  styleUrls: ['./materi-list.component.scss']
})
export class MateriListComponent implements OnInit {

  materi : MateriData[];
  materi1 : MateriData;
  selectedRow : MateriData;
  namaCourse: string;
  course = new Course();
  idCourse: string;
  idSubcourse: any;
  subcourse: Subcourse[];

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService,
    private messageService: MessageService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idCourse = params.idCourse;
      this.namaCourse = params.namaCourse;
    });

    this.courseService.getCourseById(this.idCourse).subscribe( res => {
      this.namaCourse = res.namaCourse;
      this.course = res;
    });
    
    this.subcourseService.getSubcourseByCourse(this.namaCourse).subscribe(res => {
      this.subcourse = res
      }, err => console.log(err));

    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse;
      
    });
  }

  onDelete(){
    this.subcourseService.deleteSubcourse(this.idSubcourse).subscribe( res => {
      this.onSuccess();
    }, err => {
      this.onFailed();
      console.log(err);      
    })
  }

  onRowSelect(event){
    this.materi1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : MateriData){
    let materi = {};
    for(let prop in d){
      materi[prop] = d[prop];
    }
    return d;
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Tambah Materi Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Tambah Materi Gagal!'})
  }

}
