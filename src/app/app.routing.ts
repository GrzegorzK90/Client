import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_component/login';
import { RegisterComponent } from './_component/register';
import { AuthGuard } from './_guards';
import {TaskComponent} from './_component/task';
import {WorkByPersonComponent} from './_component/work-by-person';
import {MyWorkComponent} from './_component/my-work';
import {AddTaskComponent} from './_component/task';
import {BacklogComponent} from './_component/backlog';

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
