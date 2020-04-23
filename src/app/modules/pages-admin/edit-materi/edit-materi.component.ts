import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-materi',
  templateUrl: './edit-materi.component.html',
  styleUrls: ['./edit-materi.component.scss']
})
export class EditMateriComponent implements OnInit {

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date

  constructor() { }

  ngOnInit(): void {
  }

}
