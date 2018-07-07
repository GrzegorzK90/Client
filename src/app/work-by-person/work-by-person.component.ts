import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {WorkByPersonService, UserService} from '../_services';
import {ActivatedRoute, Router} from '@angular/router';
import { UserTaskBoard} from '../_models';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './work-by-person.component.html',
  styleUrls: ['./work-by-person.component.css'],
  providers: [ WorkByPersonService]
})
export class WorkByPersonComponent implements OnInit {

  //Tymczasowe do operacji na statusie XD
  fromUserId: number;
  toUserId: number;
  taskChangeId: number;
  taskStatusAfter: number;
  taskStatusBefor: number;
  status: string;

  param1: string;

  users: UserTaskBoard[] = [];

  user = new UserTaskBoard;

  constructor(public dragulaService: DragulaService, private userService: UserService , private workByPersonService: WorkByPersonService, private route: ActivatedRoute, private router: Router) {
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
        this.workByPersonService.getData().subscribe(data => {
          this.users = data;
        });
      }

  private onDrag(args) {
    const [e, el] = args;
    this.fromUserId = el.title;
    this.taskStatusBefor = el.id;
    this.taskChangeId = e.id;
    // do something
  }

  private onDrop(args) {
    const [e, el] = args;
    this.toUserId = el.title;
    this.taskStatusAfter = el.id;
    // console.log('Task nr ' + this.taskChangeId + ' Od uzytkownika nr ' + this.fromUserId + ' do uzytkownika ' +
    // this.toUserId + ' Z statusem przed = ' + this.taskStatusBefor + ' zmienionym na ' + this.taskStatusAfter);
    if (<number>this.taskStatusAfter == <number>0 ) {
      this.status = 'open';
    } else { this.status = 'done'; }
    console.log(' ??????' + this.taskStatusAfter +' czyli ' + this.status);
    this.workByPersonService.update(this.taskChangeId, this.toUserId, this.status).subscribe(data => console.log(data));
    // do something
  }

  private onOver(args) {
    const [e, el] = args;
    console.log('poza' + el);
    // do something
  }

  private onOut(args) {
    const [e, el] = args;

    // do something
  }


  private infoXD(taskId: number) {
    this.router.navigate(['/task/' + taskId]);
  }
  addTask() {
    this.router.navigate(['/addTask/' + 0]);
  }

}
