import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {TasksOfUsers} from '../_models';


@Injectable({
  providedIn: 'root'
})
export class WorkByPersonService {
  //header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token).set( 'Content-Type', 'application/json');

  taskOfUser = [
    {
      userId: 1,
      open: [{taskName: 'create good code', taskId: 1}, {taskName: 'do something', taskId: 4 }],
      planed: [{taskName: 'test', taskId: 2}],
      done: [{taskName: 'Ukonczone', taskId: 6}]
    }
  ];

  taskOfUser2 = [
    {
      userId: 2,
      open: [{taskName: 'drop this shit', taskId: 1}, {taskName: 'when i gone', taskId: 4 }],
      planed: [{taskName: ';D', taskId: 2}],
      done: [{taskName: 'drop This', taskId: 6}]
    }
  ];


  tasks: { userId: number,
    open: { taskName: string; taskId: number; }[],
    planed: { taskName: string; taskId: number; }[],
    done: { taskName: string; taskId: number; }[]
  }[] = [];
  user = [
    {
      userId: 1,
      userName: 'bill',
      tasks: this.taskOfUser
    },

    {
      userId: 2,
      userName: 'jimi',
      tasks: this.taskOfUser2
    }
  ];

  constructor(private http: HttpClient) {}
    getData(){
    return this.http.get('http://localhost:8080/taskboard');
  }



  //addTask(userId: number, taskId: number, taskName: string, type: number) {
  //  this.task.push({userId: userId, taskId: taskId, taskName: taskName, type: type});
  //}
}
