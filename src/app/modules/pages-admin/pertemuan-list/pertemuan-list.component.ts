import { Component, OnInit } from '@angular/core';
import { KelasData } from '../kelas-data';
import { KelasService } from 'src/app/service/kelas.service';
import { Kelas } from 'src/app/model/kelas';
import { PertemuanService } from 'src/app/service/pertemuan.service';
import { ActivatedRoute } from '@angular/router';
import { Pertemuan } from 'src/app/model/pertemuan';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pertemuan-list',
  templateUrl: './pertemuan-list.component.html',
  styleUrls: ['./pertemuan-list.component.scss']
})
export class PertemuanListComponent implements OnInit {

  // kelas : KelasData[]
  kelas1 : KelasData
  selectedRow : KelasData
  kelas : Kelas[];
  idSubcourse: any;
  pertemuan : Pertemuan[];
  idPertemuan: any;

  constructor(private pertemuanService: PertemuanService, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idSubcourse = params.idSubcourse
    })

    this.pertemuanService.getPertemuanBySubcourse(this.idSubcourse).subscribe( res => {
      this.pertemuan = res
    })

    document.getElementById("sideClass").className="active";
  }

  getId(id){
    this.idPertemuan = id;
  }

  onDelete(){
    this.pertemuanService.deletePertemuan(this.idPertemuan).subscribe( res => {
      this.onSuccess();
    }, err => {
      this.onFailed();
      console.log(err);
    })
  }

  onSuccess(){
    this.messageService.add({severity:'success', summary:'Success!', detail:'Delete Pertemuan Berhasil!'})
  }
  onFailed(){
    this.messageService.add({severity:'error', summary:'Error!', detail:'Delete Pertemuan Gagal!'})
  }

  onRowSelect(event){
    this.kelas1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : KelasData){
    let kelas = {};
    for(let prop in d){
      kelas[prop] = d[prop];
    }
    return d;
  }

}
