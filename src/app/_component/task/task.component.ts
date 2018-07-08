import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../_services/index';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../_models/index';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  param: number;
  task = new Task;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private location: Location,
              public snackBar: MatSnackBar) {
    this.route.params.subscribe(params => {
      this.param = +params['id'];
    });
  }

  ngOnInit() {
    this.taskService.getData(this.param).subscribe(data => {
      this.task.taskId = data.taskId;
      this.task.title = data.title;
      this.task.content = data.content;
      this.task.finished = data.finished;
      this.task.status = data.status;
      this.task.userId = data.userId;
      this.task.bugs = data.bugs;
      this.task.source = data.source;
      this.task.time = data.time;
      this.task.project = data.project;
    });
  }


  save() {
    this.taskService.save(this.task).subscribe(data => console.log(data));
    this.snackBar.open('Saved' , '',  {duration: 600});
  }

  delete() {
    this.taskService.delete(this.param).subscribe(data => console.log(data));
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
