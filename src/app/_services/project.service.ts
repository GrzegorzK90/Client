import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Project, ProjectPB, Task} from '../_models';


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

  getDataProject(projectId: number) {
    return this.http.get<ProjectPB>('http://localhost:8080/backlog/' + projectId);
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

  save(project: ProjectPB, projectId: number) {
    return this.http.request('PUT', 'http://localhost:8080/backlog/' + projectId, {
      body: {
        title: project.project.title,
        content: project.project.content,
      }
    });
  }

  delete(projectId: number) {
    return this.http.request('DELETE', 'http://localhost:8080/backlog/' + projectId);
  }

  addProject(project: Project) {
    return this.http.request('POST', 'http://localhost:8080/backlog', {
      body: {
        content: project.content,
        title: project.title,
      }
    });
  }
}
