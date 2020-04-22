import {Component, OnInit} from '@angular/core';
import { MateriService } from 'src/app/service/materi.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-detail-materi',
  templateUrl: './detail-materi.component.html',
  styleUrls: ['./detail-materi.component.scss']
})
export class DetailMateriComponent implements OnInit {

  constructor(private materiService: MateriService) {
  }

  ngOnInit() {
  }

  onClick(){
    this.materiService.downloadFile("20f3b84f-1906-4568-8cb8-5c8d469a46f7").subscribe(blob => {
      saveAs(blob);
    })
  }

}
