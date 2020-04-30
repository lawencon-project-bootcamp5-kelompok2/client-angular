import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/model/trainer';
import { Course } from 'src/app/model/course';
import { TrainerService } from 'src/app/service/trainer.service';
import { CourseService } from 'src/app/service/course.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  trainer: Trainer[];
  course = new Course();

  constructor(private courseService : CourseService, private trainerService: TrainerService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.trainerService.getTrainer().subscribe(result => {
      this.trainer = result
    }, err => console.log(err)
    )
  }

  onSubmit(){
    this.courseService.addCourse(this.course).subscribe(result => {
      this.onSuccess();
      }, err => {
        this.onFailed();
        console.log(err);
      },
      ()=> console.log("Insert Success!")    
    )
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Tambah Course Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Tambah Course Gagal!'})
  }

}
