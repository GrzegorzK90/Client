import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from '../_models';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient, private router: Router) {
  }

  // Pobranie informacji z taska
  getData(taskId: number) {
    return this.http.get<Task>('http://localhost:8080/task/' + taskId);
  }

  // Usuniecie taska -> przejscie na poprzednia strone
  delete(taskId: number) {
    return this.http.request('DELETE', 'http://localhost:8080/task', {
      body: {taskId: taskId}
    });
  }

  save(task: Task) {
    return this.http.request('PUT', 'http://localhost:8080/task', {
      body: {
        taskId: task.taskId,
        title: task.title ,
        content: task.content,
        finished: task.finished,
        status: task.status,
        userId: task.userId,
        bugs: task.bugs,
        source: task.source,
        time: task.time,
        projectId: task.projectId,
      }
    });
  }
  addTask(task: Task){
    return this.http.request('POST', 'http://localhost:8080/task', {
      body: {
        title: task.title ,
        content: task.content,
        finished: task.finished,
        status: task.status,
        userId: task.userId
      }
    });
  }
}
