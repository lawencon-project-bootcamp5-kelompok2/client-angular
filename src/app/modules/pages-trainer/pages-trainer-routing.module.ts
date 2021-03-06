import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SubcourseAddComponent } from './subcourse-add/subcourse-add.component';
import { ListAbsenComponent } from './list-absen/list-absen.component';
import { ListNilaiComponent } from './list-nilai/list-nilai.component';
import { ListReportNilaiSubcourseComponent } from './list-report-nilai-subcourse/list-report-nilai-subcourse.component';
import { ListReportNilaiSubcourseStudentComponent } from './list-report-nilai-subcourse-student/list-report-nilai-subcourse-student.component';
import { SubcourseEditComponent } from './subcourse-edit/subcourse-edit.component';
import { RekapAbsensiListComponent } from './rekap-absensi-list/rekap-absensi-list.component';
import { RekapAbsensiComponent } from './rekap-absensi/rekap-absensi.component';
import { RekapNilaiListComponent } from './rekap-nilai-list/rekap-nilai-list.component';
import { RekapNilaiComponent } from './rekap-nilai/rekap-nilai.component';
import { ForumComponent } from './forum/forum.component';
import { RekapAbsensiPertemuanListComponent } from './rekap-absensi-pertemuan-list/rekap-absensi-pertemuan-list.component';
import { RekapNilaiKelasListComponent } from './rekap-nilai-kelas-list/rekap-nilai-kelas-list.component';
import { PertemuanDetailComponent } from './pertemuan-detail/pertemuan-detail.component';


const routes: Routes = [
  {
    path: '', component: TrainerComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'forum', component: ForumComponent},
      {path: "coursedetail", component: CourseDetailComponent},
      {path: 'pertemuan-detail', component: PertemuanDetailComponent},
      {path: "addsubcourse", component: SubcourseAddComponent},
      {path: 'listabsen', component: ListAbsenComponent},
      {path: 'form-nilai', component: ListNilaiComponent},
      {path: 'nilai', component: ListReportNilaiSubcourseComponent},
      {path: 'nilaimateri', component: ListReportNilaiSubcourseStudentComponent},
      {path: 'editsubcourse', component: SubcourseEditComponent},
      {path: 'list-rekap-absen', component: RekapAbsensiListComponent},
      {path: 'rekap-absen', component: RekapAbsensiComponent},
      {path: 'list-rekap-nilai', component: RekapNilaiListComponent},
      {path: 'rekap-nilai', component: RekapNilaiComponent},
      {path: 'list-pertemuan-rekap-absen', component: RekapAbsensiPertemuanListComponent},
      {path: 'list-kelas-rekap-nilai', component: RekapNilaiKelasListComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTrainerRoutingModule { }
