import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-side-student',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.scss']
})
export class StudentNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

}
