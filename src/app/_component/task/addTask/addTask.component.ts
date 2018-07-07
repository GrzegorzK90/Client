import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../../_models/index';
import {TaskService} from '../../../_services/index';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent implements OnInit {

  param: number;
  task = new Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
     public snackBar: MatSnackBar) {
    this.route.params.subscribe(params => {
      this.param = +params['id'];
      this.task.userId = this.param;
      this.task.finished = false;
    });
  }

  ngOnInit() {}


  add() {
    this.taskService.addTask(this.task).subscribe(data => console.log(data));
    this.snackBar.open('Added' , '',  {duration: 600})
    this.goBack();
  }
  goBack() {
    this.location.back();
  }

}
