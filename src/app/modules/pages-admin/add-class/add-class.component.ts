import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';
import {MessageService} from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  kelas: Kelas[];
  course: Course[];
  trainer: Trainer[];
  kelasInput: Kelas = new Kelas();
  checkbox: boolean = false;

  constructor(private kelasService: KelasService, private courseService: CourseService,
    private trainerService: TrainerService, private messageService: MessageService, private location : Location) { }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe(result =>
      this.kelas = result,
      err => console.log(err)  
    );
    
    this.courseService.getCourse().subscribe(result =>
      this.course = result);

    this.trainerService.getTrainer().subscribe(result =>
      this.trainer = result,
      err => console.log(err)
    );

    document.getElementById("side").className="active";
  }

  onSubmit(){
    this.kelasService.insertKelas(this.kelasInput).subscribe(result=> {
      this.onSuccess();
      },
      err => {
        this.onFailed();
        console.log(err);        
      },
      () => console.log("Insert Success!")
    )
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Tambah Kelas Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Tambah Kelas Gagal!'})
  }

  prevPage(){
    this.location.back();
  }

}
