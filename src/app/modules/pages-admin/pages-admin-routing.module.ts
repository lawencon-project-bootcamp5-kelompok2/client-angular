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
import { ClassListComponent } from './class-list/class-list.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditMateriComponent } from './edit-materi/edit-materi.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { ListRekapClassComponent } from './list-rekap-class/list-rekap-class.component';
import { ListRekapJadwalComponent } from './list-rekap-jadwal/list-rekap-jadwal.component';
import { RekapJadwalComponent } from './rekap-jadwal/rekap-jadwal.component';
import { RekapNilaiListComponent } from './rekap-nilai-list/rekap-nilai-list.component';
import { RekapNilaiComponent } from './rekap-nilai/rekap-nilai.component';
import { RekapAbsenTrainerListComponent } from './rekap-absen-trainer-list/rekap-absen-trainer-list.component';
import { RekapAbsenTrainerClassComponent } from './rekap-absen-trainer-class/rekap-absen-trainer-class.component';
import { RekapAbsenTrainerComponent } from './rekap-absen-trainer/rekap-absen-trainer.component';
import { RekapAbsenStudentListComponent } from './rekap-absen-student-list/rekap-absen-student-list.component';
import { RekapAbsenStudentClassComponent } from './rekap-absen-student-class/rekap-absen-student-class.component';
import { RekapAbsenStudentComponent } from './rekap-absen-student/rekap-absen-student.component';

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
      {path: 'add-materi', component: AddMateriComponent},
      {path: 'list-class', component: ClassListComponent},
      {path: 'add-class', component: AddClassComponent},
      {path: 'edit-course', component: EditCourseComponent},
      {path: 'edit-materi', component: EditMateriComponent},
      {path: 'edit-class', component: EditClassComponent},
      {path: 'rekap-kelas', component: ListRekapClassComponent},
      {path: 'rekap-jadwal', component: ListRekapJadwalComponent},
      {path: 'rekap-jadwal-course', component: RekapJadwalComponent},
      {path: 'rekap-nilai-list', component: RekapNilaiListComponent},
      {path: 'rekap-nilai', component: RekapNilaiComponent},
      {path: 'rekap-absen-trainer-list', component: RekapAbsenTrainerListComponent},
      {path: 'rekap-absen-trainer-class', component: RekapAbsenTrainerClassComponent},
      {path: 'rekap-absen-trainer', component: RekapAbsenTrainerComponent},
      {path: 'rekap-absen-student-list', component : RekapAbsenStudentListComponent},
      {path: 'rekap-absen-student-class', component: RekapAbsenStudentClassComponent},
      {path: 'rekap-absen-student', component: RekapAbsenStudentComponent}
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
