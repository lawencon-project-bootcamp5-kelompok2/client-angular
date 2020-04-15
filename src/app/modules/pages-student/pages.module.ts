import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './student/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { EnrollComponent } from './enroll/enroll.component';
import { DetailMateriComponent } from './detail-materi/detail-materi.component';
import { PembelajaranComponent } from './list-pembelajaran/pembelajaran.component';
import { NilaiComponent } from './nilai/nilai.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [PagesComponent, DashBoardComponent, EnrollComponent, DetailMateriComponent, PembelajaranComponent,
  NilaiComponent, TestPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule {
}
