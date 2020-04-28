import { Component, OnInit } from '@angular/core';
import { TrainerData } from '../trainer-data';
import { Trainer } from 'src/app/model/trainer';
import { TrainerService } from 'src/app/service/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {

  trainer : Trainer[] = [new Trainer()]
  trainer1 : Trainer
  selectedRow : Trainer
  idTemp 
  search 
  count : number = 1

  constructor(private trainerService : TrainerService, private router : Router) { }

  ngOnInit(): void {
    this.getAllDataTrainer()
  }

  getAllDataTrainer(){
    let resp
    if (this.search == null) {
      resp = this.trainerService.getTrainer()
      resp.subscribe(
          (data)=>this.trainer = data,
          (err)=>console.log("Ada error : "+err),
          ()=>console.log("Complete")
        )
    }else{
      resp = this.trainerService.searchData(this.search)
      resp.subscribe(
          (data)=>this.trainer = data,
          (err)=>console.log("Ada error : "+err),
          ()=>console.log("Complete")
        )
    } 
   
  }

  onRowSelect(event){
    this.trainer1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Trainer){
    let trainer = {};
    for(let prop in d){
      trainer[prop] = d[prop];
    }
    return d;
  }

  setDelete(idTrainer){
    this.idTemp = idTrainer
    console.log(this.idTemp)
    
  }

  delete(){
    console.log(this.idTemp)
    let resp = this.trainerService.deleteTrainer(this.idTemp)
    resp.subscribe(
      (err)=>console.log("ada error : "+err),
      ()=>console.log("Complete")
    )
    window.location.reload();
  }

  searchClick(){
    this.router.navigateByUrl("/admin/list-trainer")
  }

}
