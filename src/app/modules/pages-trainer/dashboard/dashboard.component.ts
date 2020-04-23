import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[];

  constructor(private kelasService: KelasService) {
    // kelasService.getKelas().subscribe( result => {
    //   this.kelas = result
    // });
  }

  ngOnInit(): void {
    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result
    });
  }

}
