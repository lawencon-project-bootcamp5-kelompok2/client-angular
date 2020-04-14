import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {StudentNavComponent} from './side-nav-student/student-nav.component';
import {SettingsComponent} from './settings/settings.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StudentNavComponent,
    SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StudentNavComponent,
    SettingsComponent
  ]
})
export class LayoutModule {
}
