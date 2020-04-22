import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor() { }

  editClick : boolean = false
  dataNotNull : boolean = true
  buttonEdit : string = 'Edit Deskripsi'


  ngOnInit(): void {
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

}
