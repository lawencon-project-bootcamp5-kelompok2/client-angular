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



@NgModule({
  declarations: [AdminComponent, DashboardComponent, TrainerListComponent, AddTrainerComponent, EditTrainerComponent, CourseListComponent, AddCourseComponent, MateriListComponent, AddMateriComponent, ClassListComponent],
  imports: [
    CommonModule, PagesAdminRoutingModule, LayoutModule,FormsModule, TableModule, PagesAdminRoutingModule, CalendarModule
  ]
})
export class PagesAdminModule { }
