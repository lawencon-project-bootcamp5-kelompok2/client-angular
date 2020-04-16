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


@NgModule({
  declarations: [TrainerComponent, DashboardComponent, CourseDetailComponent, SubcourseEditComponent, SubcourseAddComponent],
  imports: [
    CommonModule,
    PagesTrainerRoutingModule,
    LayoutModule,CalendarModule,FormsModule
  ]
})
export class PagesTrainerModule { }
