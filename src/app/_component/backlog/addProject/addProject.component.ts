import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../_models';
import {ProjectService} from '../../../_services';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css']
})
export class AddProjectComponent implements OnInit {

  param: number;
  project = new Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {}


  add() {
    this.projectService.addProject(this.project).subscribe(data => console.log(data));
    this.snackBar.open('Added' , '',  {duration: 600})
    this.goBack();
  }
  goBack() {
    this.location.back();
  }

}
