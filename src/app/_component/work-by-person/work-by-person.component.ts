import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {WorkByPersonService, UserService} from '../../_services/index';
import {ActivatedRoute, Router} from '@angular/router';
import {UserTaskBoard} from '../../_models/index';
import {pipe, Subscription} from 'rxjs';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './work-by-person.component.html',
  styleUrls: ['./work-by-person.component.css'],
  providers: [WorkByPersonService]
})
export class WorkByPersonComponent implements OnInit, OnDestroy{

  //Tymczasowe do operacji na statusie XD
  subscription: Subscription;
  fromUserId: number;
  toUserId: number;
  taskChangeId: number;
  taskStatusAfter: number;
  taskStatusBefor: number;
  status: string;
  projectId: number;

  users = new Array<UserTaskBoard>();


  constructor(public dragulaService: DragulaService,
              private userService: UserService,
              private workByPersonService: WorkByPersonService,
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
    this.subscription = this.workByPersonService.getData().subscribe(data => {
      this.users = data;
    });
  }

  private onDrag(args) {
    const [e, el] = args;
    this.fromUserId = el.title;
    this.taskStatusBefor = el.id;
    this.taskChangeId = e.id;
    this.projectId = e.title;
    console.log('test' + this.projectId);
  }

  private onDrop(args) {
    const [e, el] = args;
    this.toUserId = el.title;
    this.taskStatusAfter = el.id;
    if (<number>this.taskStatusAfter == <number>0) {
      this.status = 'open';
    } else {
      this.status = 'done';
    }
    this.subscription = this.workByPersonService.update(this.taskChangeId, this.toUserId, this.status, this.projectId).pipe().subscribe();
  }

  private onOver(args) {
    const [e, el] = args;
  }

  private onOut(args) {
    const [e, el] = args;

  }

  private addTask() {
    this.router.navigate(['/addTask/' + 0]);
  }

  private clicked(taskId: number) {
    this.router.navigate(['/task/' + taskId]);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
