import { Component, OnInit } from '@angular/core';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[] = [new Kelas()];
  trainer: Trainer[] = [new Trainer()];
  student: Student[] = [new Student()];
  totalKelas: any;
  totalTrainer: any;
  totalStudent: any;

  constructor(private kelasService: KelasService, private trainerService: TrainerService,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result;
      this.totalKelas = result.length;
    });

    this.trainerService.getTrainer().subscribe( res => {
      this.trainer = res;
      this.totalTrainer = res.length;
    });

    this.studentService.getStudents().subscribe( res => {
      this.student = res;
      this.totalStudent = res.length;
    });

    document.getElementById("sideDashboard").className="active";

  }

}
