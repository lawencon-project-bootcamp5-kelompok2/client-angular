import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './student/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { EnrollComponent } from './enroll/enroll.component';
import { DetailMateriComponent } from './detail-materi/detail-materi.component';
import { AbsensiComponent } from './absensi/absensi.component';
import { NilaiComponent } from './nilai/nilai.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SilabusComponent } from './silabus/silabus.component';
import { PertemuanComponent } from './pertemuan/pertemuan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, DashBoardComponent, EnrollComponent, DetailMateriComponent, AbsensiComponent,
  NilaiComponent, TestPageComponent, SilabusComponent, PertemuanComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    TableModule,FormsModule
  ]
})
export class PagesModule {
}
