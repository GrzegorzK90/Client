import { Component, OnInit } from '@angular/core';
import {TaskService} from '../_services';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../_models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  param: number;
  task = new Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.param = +params['id'];
      console.log(this.param);
    });
  }

  ngOnInit() {
    //dp zamiany na liste ;D
    this.taskService.getData(this.param).subscribe( data => {
      this.task.taskId = data.taskId;
      this.task.title = data.title;
      this.task.content = data.content;
      this.task.finished = data.finished;
      this.task.status = data.status;
      this.task.userId = data.userId;
      this.task.bugs = data.bugs;
      this.task.source = data.source;
      this.task.time = data.time;
      this.task.projectId = data.projectId;
    });  //data => this.task = data
    console.log(this.task);
  }


  save() {
    this.taskService.save(this.task).subscribe(data => console.log(data));
}
delete() { this.taskService.delete(this.param).subscribe(data => console.log(data));
  }
}
