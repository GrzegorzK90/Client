import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AuthenticationService, MyWorkService, TaskService, UserService, WorkByPersonService} from './_services';
import { LoginComponent } from './_component/login';
import { RegisterComponent } from './_component/register';
import { TaskComponent } from './_component/task';
import { ProjectComponent } from './_component/project/project.component';
import {CustomMaterialModule} from './material.module';
import {WorkByPersonComponent} from './_component/work-by-person';
import {DragulaModule} from 'ng2-dragula';
import {MyWorkComponent} from './_component/my-work';
import {AddTaskComponent} from './_component/task';
import {BacklogComponent} from './_component/backlog';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    CustomMaterialModule,
    DragulaModule,
    FormsModule,

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    ProjectComponent,
    WorkByPersonComponent,
    MyWorkComponent,
    AddTaskComponent,
    BacklogComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    WorkByPersonService,
    MyWorkService,
    TaskService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
