import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {ProjectService} from '../../../_services';
import {Project, ProjectPB, Task, TaskPB} from '../../../_models';


@Component({
  selector: 'app-edit-project',
  templateUrl: './editProject.component.html',
  styleUrls: ['./editProject.component.css']
})
export class EditProjectComponent implements OnInit {

  param: number;
  project = new ProjectPB;
  proj = new Project;
  task = new TaskPB;
  open = new Task;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private location: Location,
              public snackBar: MatSnackBar) {
    this.route.params.subscribe(params => {
      this.param = +params['id'];
    });
  }

  ngOnInit() {
    this.projectService.getDataProject(this.param).subscribe(data => {
       console.log(data);
       this.project = data;
       this.proj = data.project;
       this.task = data.project.taskPB;
        // this.project.project.title = data.project.title;
        // this.project.project.content = data.project.content;
        // this.project.taskPB.close = data.project.taskPB.close;
        // this.project.taskPB.open = this.project.taskPB.open;
        // this.project.bugs = this.project.bugs;
    });
  }


  // save() {
  //   this.taskService.save(this.task).subscribe(data => console.log(data));
  //   this.snackBar.open('Saved' , '',  {duration: 600});
  // }
  //
  // delete() {
  //   this.taskService.delete(this.param).subscribe(data => console.log(data));
  //   this.goBack();
  // }
  //
  goBack() {
    this.location.back();
   }
}
