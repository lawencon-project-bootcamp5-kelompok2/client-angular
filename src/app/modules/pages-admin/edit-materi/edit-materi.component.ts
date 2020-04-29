import { Component, OnInit } from '@angular/core';
import { Subcourse } from 'src/app/model/subcourse';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from 'src/app/service/subcourse.service';

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
  subcourse = new Subcourse()
  idSubcourse: any

  constructor(private route: ActivatedRoute, private subcourseService: SubcourseService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse
    })

    this.subcourse.idSubcourse = this.idSubcourse
  }

  onSubmit(){
    this.subcourseService.updateSubcourse(this.subcourse).subscribe(res => {
      
    })
  }

}
