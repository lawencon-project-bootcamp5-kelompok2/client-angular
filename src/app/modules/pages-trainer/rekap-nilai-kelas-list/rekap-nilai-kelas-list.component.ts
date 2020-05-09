import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';
import { TrainerService } from 'src/app/service/trainer.service';
import { KelasService } from 'src/app/service/kelas.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { CourseService } from 'src/app/service/course.service';
import { SubcourseService } from 'src/app/service/subcourse.service';
import { Trainer } from 'src/app/model/trainer';

@Component({
  selector: 'app-rekap-nilai-kelas-list',
  templateUrl: './rekap-nilai-kelas-list.component.html',
  styleUrls: ['./rekap-nilai-kelas-list.component.scss']
})
export class RekapNilaiKelasListComponent implements OnInit {

  kelas1 : Kelas
  selectedRow : Kelas

  nama : string
  trainer : Trainer
  kelas : Kelas[]

  constructor(private trainerService: TrainerService, private kelasService: KelasService, private tokenStorage: TokenStorageService,
    private courseService: CourseService, private subcourseService: SubcourseService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.trainerService.getTrainerByEmail(user.email).subscribe(res => {
      this.trainer = res,
      this.kelasService.getKelasByTrainer(this.trainer.idTrainer).subscribe(res => {
        this.kelas = res
      })
    })
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : any){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  } 

}
