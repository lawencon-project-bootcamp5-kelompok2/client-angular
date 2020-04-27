import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'student', 
    loadChildren: () => import('./modules/pages-student/pages.module').then(m => m.PagesModule), 
    canActivate: [AuthGuard],
    data: { 
      expectedRole: 'ROLE_STUDENT'
    } 
  },
  {
    path: 'trainer', 
    loadChildren: () => import('./modules/pages-trainer/pages-trainer.module').then(m => m.PagesTrainerModule), 
    canActivate: [AuthGuard],
    data: { 
      expectedRole: 'ROLE_TRAINER'
    } 
  },
  {
    path: 'admin', loadChildren: () => import('./modules/pages-admin/pages-admin.module').then(m => m.PagesAdminModule), 
    canActivate: [AuthGuard],
    data: { 
      expectedRole: 'ROLE_ADMIN'
    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
