import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../_models';
import {TaskService} from '../../_services';

@Component({
  selector: 'app-add-task',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent implements OnInit {

  param: number;
  task = new Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.param = +params['id'];
      console.log(this.param);
      this.task.userId = this.param;
      this.task.finished = false;
    });
  }

  ngOnInit() {}


  add() {
    this.taskService.addTask(this.task).subscribe(data => console.log(data));
  }

}
