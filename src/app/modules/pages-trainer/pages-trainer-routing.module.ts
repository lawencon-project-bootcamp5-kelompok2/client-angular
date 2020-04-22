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

const routes: Routes = [
  {
    path: '', component: TrainerComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'coursedetail', component: CourseDetailComponent},
      {path: 'addsubcourse', component: SubcourseAddComponent},
      {path: 'listabsen', component: ListAbsenComponent},
      {path: 'form-nilai', component: ListNilaiComponent},
      {path: 'nilai', component: ListReportNilaiSubcourseComponent},
      {path: 'nilaimateri', component: ListReportNilaiSubcourseStudentComponent},
      {path: 'editsubcourse', component: SubcourseEditComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTrainerRoutingModule { }
