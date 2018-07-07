import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {TaskComponent} from './task';
import {WorkByPersonComponent} from './work-by-person';
import {MyWorkComponent} from './my-work';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'task', component: TaskComponent, canActivate: [AuthGuard]},
  { path: 'workByPerson', component: WorkByPersonComponent, canActivate: [AuthGuard]},
  { path: 'myWork', component: MyWorkComponent, canActivate: [AuthGuard]},
  { path: 'test', component: TaskComponent, canActivate: [AuthGuard], outlet: 'test'},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
