import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  idKelas: any;
  kelas: Kelas = new Kelas();
  kelasInput = new Kelas();
  trainer: Trainer[];
  courses: Course[];

  constructor(private route: ActivatedRoute, private kelasService: KelasService, 
    private courseService: CourseService, private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idKelas = params.idKelas
    });

    this.kelasService.getKelasById(this.idKelas).subscribe(result => {
      this.kelas = result
    });

    this.courseService.getCourse().subscribe(result => {
      this.courses = result
    });

    this.trainerService.getTrainer().subscribe(result => {
      this.trainer = result
    });

    this.kelasInput.idKelas = this.idKelas;
  }

  onSubmit(){
    this.kelasService.updateKelas(this.kelasInput).subscribe(result => {

      }, err => console.log(err),
      () => console.log("Update Success")    
    )
  }

}
