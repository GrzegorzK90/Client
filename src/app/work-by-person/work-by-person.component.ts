import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {WorkByPersonService, MyWorkService, UserService} from '../_services';
import {ActivatedRoute} from '@angular/router';
import {s} from '@angular/core/src/render3';
import {errorHandler} from '@angular/platform-browser/src/browser';
import {TasksTaskBoard, User, UserTaskBoard} from '../_models';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './work-by-person.component.html',
  styleUrls: ['./work-by-person.component.css'],
  providers: [ WorkByPersonService, MyWorkService ]
})
export class WorkByPersonComponent implements OnInit{

  param1: string;

  users: UserTaskBoard[] = [];

  user = new UserTaskBoard;

  constructor(public dragulaService: DragulaService, private userService: UserService , private workByPersonService: WorkByPersonService, private myWorkService: MyWorkService, private route: ActivatedRoute) {
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
    // if (this.route.snapshot.params.id === '1'){
    //   this.users = this.myWorkService.user;
    // } else {
      this.workByPersonService.getData().subscribe(data => {
        this.user = data;
        console.log(this.user);
        this.users.push(this.user);
      });
     // }
  }

  private onDrag(args) {
    let [e, el] = args;
    console.log("Z pojemnika nr: " + el.id + " pobrałem element " + e.id);
    console.log(e);
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // console.log(e.id);
    console.log("Do pojemnika nr: " + el.id);
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;

    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;

    // do something
  }

  private infoXD(taskId: number){
    console.log(taskId);
  }

}
