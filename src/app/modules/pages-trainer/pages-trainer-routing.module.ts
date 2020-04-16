import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SubcourseAddComponent } from './subcourse-add/subcourse-add.component';

const routes: Routes = [
  {
    path: '', component: TrainerComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'coursedetail', component: CourseDetailComponent},
      {path: 'addsubcourse', component: SubcourseAddComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTrainerRoutingModule { }
