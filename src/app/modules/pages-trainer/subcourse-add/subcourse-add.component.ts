import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcourse-add',
  templateUrl: './subcourse-add.component.html',
  styleUrls: ['./subcourse-add.component.scss']
})
export class SubcourseAddComponent implements OnInit {

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date

  constructor() { }

  ngOnInit(): void {
  }

}
