import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini');
  }

}
