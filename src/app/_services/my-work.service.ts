import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Task services
export class MyWorkService {


  taskOfUser = [
    {
      userId: 1,
      open: [{taskName: 'create good code', taskId: 1}, {taskName: 'do something', taskId: 4 }],
      planed: [{taskName: 'test', taskId: 2}],
      done: [{taskName: 'Ukonczone', taskId: 6}]
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
