import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import { MyWorkService, UserService} from '../_services';
import {ActivatedRoute} from '@angular/router';
import {s} from '@angular/core/src/render3';
import {errorHandler} from '@angular/platform-browser/src/browser';
import {TasksOfUsers, TasksTaskBoard, User, UserTaskBoard} from '../_models';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css'],
  providers: [ MyWorkService ]
})
export class MyWorkComponent implements OnInit {

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

  constructor(public dragulaService: DragulaService, private userService: UserService , private myWorkService: MyWorkService , private route: ActivatedRoute) {
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

        this.myWorkService.getData().subscribe(data => this.users = data );
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
    this.myWorkService.update(this.taskChangeId, this.toUserId, this.status).subscribe(data => console.log(data));
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

//USuwanie będzie w tasku z cofnieciem taska :D
  private infoXD(taskId: number) {
    console.log(taskId);
    //Do usuwanie przepisz do klasy Task :D
    //this.workByPersonService.delete(taskId).subscribe( data => console.log(data));
  }

}
