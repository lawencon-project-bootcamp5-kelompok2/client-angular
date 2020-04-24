import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesAdminRoutingModule } from './pages-admin-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { EditTrainerComponent } from './edit-trainer/edit-trainer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { MateriListComponent } from './materi-list/materi-list.component';
import { AddMateriComponent } from './add-materi/add-materi.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditMateriComponent } from './edit-materi/edit-materi.component';
import { ListRekapClassComponent } from './list-rekap-class/list-rekap-class.component';
import { ListRekapJadwalComponent } from './list-rekap-jadwal/list-rekap-jadwal.component';
import { RekapJadwalComponent } from './rekap-jadwal/rekap-jadwal.component';
import { RekapNilaiListComponent } from './rekap-nilai-list/rekap-nilai-list.component';
import { RekapNilaiComponent } from './rekap-nilai/rekap-nilai.component';
import { RekapAbsenTrainerListComponent } from './rekap-absen-trainer-list/rekap-absen-trainer-list.component';
import { RekapAbsenTrainerComponent } from './rekap-absen-trainer/rekap-absen-trainer.component';
import { RekapAbsenTrainerClassComponent } from './rekap-absen-trainer-class/rekap-absen-trainer-class.component';
import { RekapAbsenStudentListComponent } from './rekap-absen-student-list/rekap-absen-student-list.component';
import { RekapAbsenStudentClassComponent } from './rekap-absen-student-class/rekap-absen-student-class.component';
import { RekapAbsenStudentComponent } from './rekap-absen-student/rekap-absen-student.component';



@NgModule({
  declarations: [AdminComponent, DashboardComponent, TrainerListComponent, AddTrainerComponent, EditTrainerComponent, CourseListComponent, AddCourseComponent, MateriListComponent, AddMateriComponent, ClassListComponent, AddClassComponent, EditClassComponent, EditCourseComponent, EditMateriComponent, ListRekapClassComponent, ListRekapJadwalComponent, RekapJadwalComponent, RekapNilaiListComponent, RekapNilaiComponent, RekapAbsenTrainerListComponent, RekapAbsenTrainerComponent, RekapAbsenTrainerClassComponent, RekapAbsenStudentListComponent, RekapAbsenStudentClassComponent, RekapAbsenStudentComponent],
  imports: [
    CommonModule, PagesAdminRoutingModule, LayoutModule,FormsModule, TableModule, PagesAdminRoutingModule, CalendarModule
  ]
})
export class PagesAdminModule { }
