import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/service/trainer.service';
import { Trainer } from 'src/app/model/trainer';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { RouterLink, Router } from '@angular/router';
import { addTrainer } from 'src/app/model/addTrainer';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent implements OnInit {

  trainer = new addTrainer();

  constructor(private tokenStorage : TokenStorageService, private trainerService: TrainerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.trainer.role=["trainer"];
    this.trainerService.insertTrainer(this.trainer).subscribe(
      result => { this.router.navigate[('../')] },
      err => console.log(err),
      () => console.log("mantap")    
    )
  }

}
