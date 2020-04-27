import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'student', loadChildren: () => import('./modules/pages-student/pages.module').then(m => m.PagesModule)},
  {path: 'trainer', loadChildren: () => import('./modules/pages-trainer/pages-trainer.module').then(m => m.PagesTrainerModule)},
  {path: 'admin', loadChildren: () => import('./modules/pages-admin/pages-admin.module').then(m => m.PagesAdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
