import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {AlertService, AuthenticationService, MyWorkService, TaskService, UserService, WorkByPersonService} from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import {CustomMaterialModule} from './material.module';
import {WorkByPersonComponent} from './work-by-person';
import {DragulaModule} from 'ng2-dragula';
import {MyWorkComponent} from './my-work';
import {AddTaskComponent} from './task/addTask/addTask.component';

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
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    ProjectComponent,
    WorkByPersonComponent,
    MyWorkComponent,
    AddTaskComponent,
  ],
  providers: [
    AuthGuard,
    AlertService,
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
