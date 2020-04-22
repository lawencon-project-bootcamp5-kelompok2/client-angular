import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { EditTrainerComponent } from './edit-trainer/edit-trainer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { MateriListComponent } from './materi-list/materi-list.component';
import { AddMateriComponent } from './add-materi/add-materi.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'list-trainer', component: TrainerListComponent},
      {path: 'add-trainer', component: AddTrainerComponent},
      {path: 'edit-trainer', component: EditTrainerComponent},
      {path: 'list-course', component: CourseListComponent},
      {path: 'add-course', component: AddCourseComponent},
      {path: 'list-materi', component: MateriListComponent},
      {path: 'add-materi', component: AddMateriComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesAdminRoutingModule { }
