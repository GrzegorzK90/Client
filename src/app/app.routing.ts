import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TaskComponent} from './task';
import {WorkByPersonComponent} from './work-by-person';
import {MyWorkComponent} from './my-work';
import {AddTaskComponent} from './task';
import {BacklogComponent} from './backlog';

const appRoutes: Routes = [
  { path: '', component: MyWorkComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'task/:id', component: TaskComponent, canActivate: [AuthGuard]},
  { path: 'workByPerson', component: WorkByPersonComponent, canActivate: [AuthGuard]},
  { path: 'backlog', component: BacklogComponent, canActivate: [AuthGuard]},
  { path: 'myWork', component: MyWorkComponent, canActivate: [AuthGuard]},
  { path: 'addTask/:id', component: AddTaskComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
