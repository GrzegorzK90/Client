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
    });
  }


   save() {
     this.projectService.save(this.project, this.param).subscribe(data => console.log(data));
     this.snackBar.open('Saved' , '',  {duration: 600});
   }

   delete() {
     this.projectService.delete(this.param).subscribe(data => console.log(data));
     this.goBack();
  }
  //
  goBack() {
    this.location.back();
   }
}
