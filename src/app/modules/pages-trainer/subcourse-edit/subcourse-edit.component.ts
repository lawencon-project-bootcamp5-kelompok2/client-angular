import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcourse-edit',
  templateUrl: './subcourse-edit.component.html',
  styleUrls: ['./subcourse-edit.component.scss']
})
export class SubcourseEditComponent implements OnInit {

  constructor() { }

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date


  ngOnInit(): void {
  }

}
