import {Component, OnInit} from '@angular/core';
import {TaskService} from '../_services';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  // param: number;
  // task = new Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location) {
    // this.route.params.subscribe(params => {
    //   this.param = +params['id'];
    //   console.log(this.param);
    // });
  }

  ngOnInit() {
    // this.taskService.getData(this.param).subscribe(data => {
    //   this.task.taskId = data.taskId;
    //   this.task.title = data.title;
    //   this.task.content = data.content;
    //   this.task.finished = data.finished;
    //   this.task.status = data.status;
    //   this.task.userId = data.userId;
    //   this.task.bugs = data.bugs;
    //   this.task.source = data.source;
    //   this.task.time = data.time;
    //   this.task.projectId = data.projectId;
    // });
  }


  // save() {
  //   // this.taskService.save(this.task).subscribe(data => console.log(data));
  // }
  //
  // delete() {
  //   this.taskService.delete(this.param).subscribe(data => console.log(data));
  //   this.goBack();
  // }

  goBack() {
    this.location.back();
  }
}
