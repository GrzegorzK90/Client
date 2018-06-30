import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TaskComponent} from './task';
import {WorkByPersonComponent} from './work-by-person';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'task', component: TaskComponent, canActivate: [AuthGuard]},
  { path: 'workByPerson', component: WorkByPersonComponent, canActivate: [AuthGuard]},
  { path: 'myWork/:id', component: WorkByPersonComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
