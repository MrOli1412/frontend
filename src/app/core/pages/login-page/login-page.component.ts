import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginFormGroup = this.fb.group(
      {login:['',Validators.required],
      password:['',Validators.required]}
      )


  }

  login() {

  }
}
