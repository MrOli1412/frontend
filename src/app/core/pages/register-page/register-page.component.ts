import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../shared/models/user";
import {Club} from "../../../shared/models/club";
import {AuthService} from "../../services/register.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerFormGroup: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private registerService: AuthService) {
  }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      secondPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clubName: ['', [Validators.required]]
    });
  }

  get password() {
    return this.registerFormGroup.get('password');
  }

  get secondPassword() {
    return this.registerFormGroup.get('secondPassword');
  }

  get username() {
    return this.registerFormGroup.get('username');
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get clubName() {
    return this.registerFormGroup.get('clubName');
  }


  register() {
    this.user = {
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      club: {
        clubName: this.clubName.value
      }
    }
    this.registerService.createAccount(this.user).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error);
    });
  }


  reset() {
    // this.username.reset();
    // this.email.reset();
    // this.clubName.reset();
    // this.password.reset();
    // this.secondPassword.reset();
    // this.registerFormGroup.reset()
  }
}
