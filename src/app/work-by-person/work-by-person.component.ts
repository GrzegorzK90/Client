import { Component, OnInit } from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import { WorkByPersonService, MyWorkService } from '../_services';
import {ActivatedRoute} from '@angular/router';
import {s} from '@angular/core/src/render3';


@Component({
  selector: 'app-work-by-person',
  templateUrl: './work-by-person.component.html',
  styleUrls: ['./work-by-person.component.css'],
  providers: [ WorkByPersonService, MyWorkService ]
})
export class WorkByPersonComponent implements OnInit{

  param1: string;
  tasks: { userId: number,
    open: { taskName: string; taskId: number; }[],
    planed: { taskName: string; taskId: number; }[],
    done: { taskName: string; taskId: number; }[]
  }[] = [];

  users: { userId: number; userName: string; tasks: {
      userId: number; open: {
        taskName: string; taskId: number }[];
      planed: { taskName: string; taskId: number }[];
      done: { taskName: string; taskId: number }[] }[] }[] | number | string;
  constructor(public dragulaService: DragulaService, private workByPersonService: WorkByPersonService, private myWorkService: MyWorkService, private route: ActivatedRoute) {
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
    console.log(this.route.snapshot.params.id);
    // this.tasks = this.tasks;
    if (this.route.snapshot.params.id === '1'){
      this.users = this.myWorkService.user;
    } else {

      this.users = this.workByPersonService.user;
     }
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
