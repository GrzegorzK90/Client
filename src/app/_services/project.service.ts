import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getData() {
    return this.http.get<any>('http://localhost:8080/backlog');
   }
  //
  update(taskId: number, newProjectId: number, newStatus: string, userId: number) {
  return this.http.request('PUT', 'http://localhost:8080/backlog', {
    body: {
        taskId: taskId,
        newProjectId: newProjectId,
        newStatus: newStatus,
        userId: userId
      }
    });
  }
}
