import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {UserService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectPB, UserTaskBoard} from '../../_models';
import {ProjectService} from '../../_services';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css'],
  providers: [ProjectService]
})
export class BacklogComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  fromProjectId: number;
  taskStatusBefore: number;
  taskChangeId: number;
  toProjectId: number;
  taskStatusAfter: number;
  status: string;
  userId: number;

  projects = new Array<ProjectPB>();


  constructor(public dragulaService: DragulaService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  ngOnInit() {

    this.subscription = this.projectService.getData().pipe().subscribe(data => {
      this.projects = data,
        console.log(data)
    });
  }

  private onDrag(args) {
    const [e, el] = args;
    this.fromProjectId = el.title;
    this.taskStatusBefore = el.id;
    this.taskChangeId = e.id;
    this.userId = e.title;
    // this.fromUserId = el.title;
    // this.taskStatusBefor = el.id;
    // this.taskChangeId = e.id;
  }

  private onDrop(args) {
    const [e, el] = args;
    this.toProjectId = el.title;
    this.taskStatusAfter = el.id;
    if (<number>this.taskStatusAfter == <number>0) {
       this.status = 'open';
     } else {
       this.status = 'done';
     }
     console.log(this.taskChangeId + ' '  + this.toProjectId + ' ' + this.status);
    this.subscription = this.projectService.update(this.taskChangeId, this.toProjectId, this.status, this.userId).pipe().subscribe();
  }

  private onOver(args) {
    const [e, el] = args;
  }

  private onOut(args) {
    const [e, el] = args;
  }

  addProject() {
    this.router.navigate(['/addProject']);
  }
   private open(projectId: number) {
   this.router.navigate(['/editProject/' + projectId]);
   }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
