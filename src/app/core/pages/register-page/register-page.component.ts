import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      secondPassword: new FormControl(),
      email: new FormControl()
    });
  }

  register() {

  }
}
