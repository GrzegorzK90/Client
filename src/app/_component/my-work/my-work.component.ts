import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {MyWorkService, UserService} from '../../_services/index';
import {ActivatedRoute, Router} from '@angular/router';
import {UserTaskBoard} from '../../_models/index';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css'],
  providers: [MyWorkService]
})
export class MyWorkComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  fromUserId: number;
  toUserId: number;
  taskChangeId: number;
  taskStatusAfter: number;
  taskStatusBefor: number;
  status: string;
  projectId: number;

  users: UserTaskBoard[] = [];


  constructor(public dragulaService: DragulaService,
              private userService: UserService,
              private myWorkService: MyWorkService,
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

    this.subscription = this.myWorkService.getData().subscribe(data => {console.log(data), this.users = data});
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
    this.subscription = this.myWorkService.update(this.taskChangeId, this.toUserId, this.status, this.projectId).subscribe();
  }

  private onOver(args) {
    const [e, el] = args;
  }

  private onOut(args) {
    const [e, el] = args;
  }

  addTask() {
    this.router.navigate(['/addTask/' + this.users[0].userId]);
  }
  private clicked(taskId: number) {
    this.router.navigate(['/task/' + taskId]);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
