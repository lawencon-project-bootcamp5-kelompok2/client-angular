import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Trainer } from 'src/app/model/trainer';
import { TrainerService } from 'src/app/service/trainer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[];
  nama: string
  trainer: Trainer = new Trainer()

  constructor(private tokenStorage : TokenStorageService,private kelasService: KelasService, private trainerService: TrainerService) {
    // kelasService.getKelas().subscribe( result => {
    //   this.kelas = result
    // });
  }

  ngOnInit(): void {
    document.getElementById("sideDashboard").className="active";
    
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.trainerService.getTrainerByEmail(user.email).subscribe(res => {
      this.trainer = res,
      this.kelasService.getKelasByTrainer(this.trainer.idTrainer).subscribe(res => {
        this.kelas = res
      })
    })
  }

}
