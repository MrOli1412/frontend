import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      secondPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  register() {

  }


}
