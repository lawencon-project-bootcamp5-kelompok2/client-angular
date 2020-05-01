import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesTrainerRoutingModule } from './pages-trainer-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { TrainerComponent } from './trainer/trainer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SubcourseEditComponent } from './subcourse-edit/subcourse-edit.component';
import { SubcourseAddComponent } from './subcourse-add/subcourse-add.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ListAbsenComponent } from './list-absen/list-absen.component';
import { TableModule } from 'primeng/table/';
import { ListNilaiComponent } from './list-nilai/list-nilai.component';
import { ListReportNilaiSubcourseComponent } from './list-report-nilai-subcourse/list-report-nilai-subcourse.component';
import { ListReportNilaiSubcourseStudentComponent } from './list-report-nilai-subcourse-student/list-report-nilai-subcourse-student.component';
import { RekapAbsensiListComponent } from './rekap-absensi-list/rekap-absensi-list.component';
import { RekapAbsensiComponent } from './rekap-absensi/rekap-absensi.component';
import { RekapNilaiListComponent } from './rekap-nilai-list/rekap-nilai-list.component';
import { RekapNilaiComponent } from './rekap-nilai/rekap-nilai.component';
import { ForumComponent } from './forum/forum.component';

import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [TrainerComponent, DashboardComponent, CourseDetailComponent, SubcourseEditComponent, SubcourseAddComponent, ListAbsenComponent, 
    ListNilaiComponent, ListReportNilaiSubcourseComponent, ListReportNilaiSubcourseStudentComponent, RekapAbsensiListComponent, RekapAbsensiComponent, 
    RekapNilaiListComponent, RekapNilaiComponent, ForumComponent],
  imports: [
    CommonModule,
    PagesTrainerRoutingModule,
    LayoutModule,CalendarModule,FormsModule,TableModule, DialogModule, ToastModule
  ]
})
export class PagesTrainerModule { }
