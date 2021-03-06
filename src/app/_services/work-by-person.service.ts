import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Project, Task} from '../_models';


@Injectable({
  providedIn: 'root'
})
export class WorkByPersonService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getData() {
    return this.http.get<any>('http://localhost:8080/workbyperson');
  }

  update(taskId: number, newUserId: number, newStatus: string, projectId: number) {
    console.log(projectId, ' ', newStatus, ' ', newUserId, ' ', taskId);
    return this.http.request('PUT', 'http://localhost:8080/taskboard', {
      body: {
        taskId: taskId,
        newUserId: newUserId,
        newStatus: newStatus,
        projectId: projectId
      }
    });
  }


}
