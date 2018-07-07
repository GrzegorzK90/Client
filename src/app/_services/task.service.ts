import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Task, UserTaskBoard} from '../_models';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient, private router: Router) {
  }

  //Pobranie informacji z taska
  getData() {
    return this.http.get<UserTaskBoard>('http://localhost:8080/taskboard');
  }

  //Usuniecie taska -> przejscie na poprzednia strone
  delete(taskId: number) {
    return this.http.request('DELETE', 'http://localhost:8080/taskboard', {
      body: {taskId: taskId}
    });
  }}

