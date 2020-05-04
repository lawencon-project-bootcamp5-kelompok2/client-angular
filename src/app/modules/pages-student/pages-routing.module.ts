import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './student/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { EnrollComponent } from './enroll/enroll.component';
import { AbsensiComponent } from './absensi/absensi.component';
import { DetailMateriComponent } from './detail-materi/detail-materi.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ForumComponent } from './forum/forum.component';
import { NilaiComponent } from './nilai/nilai.component';
import { SilabusComponent } from './silabus/silabus.component';
import { PertemuanComponent } from './pertemuan/pertemuan.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'enroll', component: EnrollComponent},
      {path: 'silabus', component: SilabusComponent},
      {path: 'absen', component: AbsensiComponent},
      {path: 'detail-materi', component: DetailMateriComponent},
      {path: 'test-page', component: TestPageComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'nilai', component: NilaiComponent},
      {path: 'pertemuan', component: PertemuanComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
