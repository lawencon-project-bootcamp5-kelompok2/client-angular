import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {StudentNavComponent} from './side-nav-student/student-nav.component';
import {SettingsComponent} from './settings/settings.component';
import { SideNavTrainerComponent } from './side-nav-trainer/side-nav-trainer.component';
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StudentNavComponent,
    SettingsComponent,SideNavTrainerComponent, SideNavAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StudentNavComponent,
    SettingsComponent,SideNavTrainerComponent,SideNavAdminComponent
  ]
})
export class LayoutModule {
}
