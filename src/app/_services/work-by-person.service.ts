import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Task, UserTaskBoard, UserTaskBoardList} from '../_models';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class WorkByPersonService {

  constructor(private http: HttpClient,
              private router: Router) {}
  getData() {
      return this.http.get<any>('http://localhost:8080/workbyperson');
  }

  update(taskId: number, newUserId: number, newStatus: string) {
    return this.http.request('PUT', 'http://localhost:8080/taskboard', {
    body: {
      taskId: taskId,
      newUserId: newUserId,
      newStatus: newStatus}
  }); }

  delete(taskId: number) {

    return this.http.request('DELETE', 'http://localhost:8080/taskboard', {
      body: { taskId: taskId }
    });
  }

  //addTask(userId: number, taskId: number, taskName: string, type: number) {
  //  this.task.push({userId: userId, taskId: taskId, taskName: taskName, type: type});
  //}
}
