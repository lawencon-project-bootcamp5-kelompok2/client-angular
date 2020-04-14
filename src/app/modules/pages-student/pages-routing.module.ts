import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './student/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { EnrollComponent } from './enroll/enroll.component';
import { PembelajaranComponent } from './list-pembelajaran/pembelajaran.component';
import { DetailMateriComponent } from './detail-materi/detail-materi.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ForumComponent } from './forum/forum.component';
import { NilaiComponent } from './nilai/nilai.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'enroll', component: EnrollComponent},
      {path: 'list-materi', component: PembelajaranComponent},
      {path: 'detail-materi', component: DetailMateriComponent},
      {path: 'test-page', component: TestPageComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'nilai', component: NilaiComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
