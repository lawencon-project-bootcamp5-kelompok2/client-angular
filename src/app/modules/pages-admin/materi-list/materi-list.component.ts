import { Component, OnInit } from '@angular/core';
import { MateriData } from '../materi-data';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/model/subcourse';

@Component({
  selector: 'app-materi-list',
  templateUrl: './materi-list.component.html',
  styleUrls: ['./materi-list.component.scss']
})
export class MateriListComponent implements OnInit {

  materi : MateriData[]
  materi1 : MateriData
  selectedRow : MateriData 
  idCourse: any
  subcourse: Subcourse[]

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idCourse = params.idCourse
    })
    this.subcourseService.getSubcourseByCourse(this.idCourse).subscribe(res => {
      this.subcourse = res
    }, err => console.log(err))
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

}
