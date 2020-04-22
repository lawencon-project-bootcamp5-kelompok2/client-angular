import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-materi',
  templateUrl: './add-materi.component.html',
  styleUrls: ['./add-materi.component.scss']
})
export class AddMateriComponent implements OnInit {

  dateTestMulai : Date
  dateTestSelesai: Date
  dateTglMulai : Date
  dateTglSelesai : Date

  constructor() { }

  ngOnInit(): void {
  }

}
