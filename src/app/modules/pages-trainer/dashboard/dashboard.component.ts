import { Component, OnInit } from '@angular/core';
import { Kelas } from 'src/app/model/kelas';
import { KelasService } from 'src/app/service/kelas.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kelas: Kelas[];
  nama: string

  constructor(private tokenStorage : TokenStorageService,private kelasService: KelasService) {
    // kelasService.getKelas().subscribe( result => {
    //   this.kelas = result
    // });
  }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.nama = user.nama;

    this.kelasService.getKelas().subscribe( result => {
      this.kelas = result
    });
  }

}
