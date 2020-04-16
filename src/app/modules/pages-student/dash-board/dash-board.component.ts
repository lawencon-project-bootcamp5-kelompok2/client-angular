import {Component, OnInit} from '@angular/core';
import { Dashboard } from '../dash';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  tableIsEmpty = true;
  dash : Dashboard[];
  dash1: Dashboard;
  cols : any[];
  selectedRow: Dashboard;

  constructor() {
  }

  ngOnInit() {
    this.dash = [
      {
        enroll:"Java",
        instruktur:"Imam Farisi",
        mulai:"20-4-2020",
        selesai:"20-5-2020"
      },
      {
        enroll:"PHP",
        instruktur:"Albert Einstein",
        mulai:"17-04-2020",
        selesai:"20-5-2020"
      }
    ]
    this.cols = [
      {field:"enroll", header:"Enroll"},
      {field:"instruktur", header:"Instuktur"},
      {field:"mulai", header:"Mulai"},
      {field:"selesai", header:"Selesai"},
    ]
  }

  onRowSelect(event) {
    this.dash1 = this.cloneSelection(event.data);
  }

  cloneSelection(d : Dashboard){
    let dash = {};
    for(let prop in d){
      dash[prop] = d[prop];
    }
    return d;
  }

}
