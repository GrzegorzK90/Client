import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../_services';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {User} from '../../_models';
import {validate} from 'codelyzer/walkerFactory/walkerFn';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User;
  private emailFormControl: FormControl;
  private passFormControl: FormControl;
  private lastNameFormControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private location: Location) {
  }

  ngOnInit() {
    this.userService.getLoged().subscribe(data => {
      this.user = data;
      console.log(this.user.email);
      this.emailFormControl.setValue(this.user.email);
      this.lastNameFormControl.setValue(this.user.lastName);
    });

    this.emailFormControl = new FormControl([this.user.email], [
      Validators.required,
      Validators.email,
    ]);
    this.passFormControl = new FormControl('', [
      Validators.minLength(6)
    ]);
    this.lastNameFormControl = new FormControl([this.user.lastName], [
      Validators.required
    ]);
  }

  save() {
    if (this.emailFormControl.value != null) {
      console.log(this.emailFormControl.value)
      this.user.email = this.emailFormControl.value;
    }
    if (this.lastNameFormControl.value != null) {
      this.user.lastName = this.lastNameFormControl.value;
    }
    if (this.passFormControl != null) {
      this.user.password = this.passFormControl.value;
    }
    this.userService.save(this.user).subscribe();
  }

  delete(){
    this.userService.delete().subscribe();
  }

  goBack() {
    this.location.back();
  }
}
