import { Component, OnInit } from '@angular/core';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[] = [new Kelas()];
  trainer: Trainer[] = [new Trainer()];
  totalKelas: any;
  totalTrainer: any;

  constructor(private kelasService: KelasService, private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result;
      this.totalKelas = result.length;
    });

    this.trainerService.getTrainer().subscribe( res => {
      this.trainer = res;
      this.totalTrainer = res.length;
    });

    this.totalKelas = this.kelas.length;
    this.totalTrainer = this.trainer.length;

  }

}
