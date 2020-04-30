import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  // templateUrl: './test.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    document.getElementById("sideEnroll").className="active";
  }

}
