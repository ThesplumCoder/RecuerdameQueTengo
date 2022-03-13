import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { TaskComponent } from './components/tasks/task.component'; 
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SingupComponent } from './components/singnup/singup.component';
import { EliminateComponent } from './components/eliminate/eliminate.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
   path: 'tasks',
   component: TaskComponent,
   canActivate: [AuthGuard]
  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'eliminate',
    component: EliminateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
