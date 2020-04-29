import { Component, OnInit } from '@angular/core';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[];

  constructor(private kelasService: KelasService) { }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result
    })
  }

}
