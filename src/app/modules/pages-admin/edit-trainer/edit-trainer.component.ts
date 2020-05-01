import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from 'src/app/model/trainer';
import { TrainerService } from 'src/app/service/trainer.service';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.scss']
})
export class EditTrainerComponent implements OnInit {

  idTemp : any
  trainer : Trainer
  alert : string
  newPass : string
  errPass

  constructor(private activatedRoute: ActivatedRoute, private trainerService: TrainerService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => this.idTemp = params.idTrainer
    )

    this.trainerService.getTrainerById(this.idTemp)
    .subscribe(
      data => this.trainer = data,
      err => console.log("Ada Error : "+err),
      () => console.log("Complete")
    )

    document.getElementById("side").className="active";
  }

  edit(){
    if (this.newPass == undefined) {
      this.alert = "Password baru kosong"
      this.errPass = "inputError"
    }else if (this.newPass.length < 6) {
      this.alert = "Password baru harus minimal 6 karakter"
      this.errPass = "inputError"
    }else{
      this.trainer.password = this.newPass
      this.trainerService.updateTrainer(this.trainer)
      .subscribe(
        err => console.log("Ada error : "+err),
        () => console.log("Completed")
      )
      this.router.navigate(['/admin/list-trainer'])
    }
  }

}
