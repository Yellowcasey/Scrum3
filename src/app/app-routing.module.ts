import { AuthGuard } from './authguard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard]
  },
  { path: 'activity-one', loadChildren: './activity-one/activity-one.module#ActivityOnePageModule', canActivate: [AuthGuard] },
  { path: 'tools', loadChildren: './tools/tools.module#ToolsPageModule', canActivate: [AuthGuard] },
  { path: 'activity', loadChildren: './activity-one/activity/activity.module#ActivityPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
