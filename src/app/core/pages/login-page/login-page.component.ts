import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/register.service";
import {error} from "util";
import {User} from "../../../shared/models/user";
import {Auth} from "../../../shared/models/auth";
import {TokenStorageService} from "../../../shared/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginFormGroup: FormGroup;
  user: User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  error: string;
  hide: boolean;

  constructor(private fb: FormBuilder, private loginService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    this.loginFormGroup = this.fb.group(
      {
        login: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )


  }

  get login() {
    return this.loginFormGroup.get('login');
  }

  get password() {
    return this.loginFormGroup.get('password');

  }

  clearError() {
    this.error = '';
  }

  confirm() {
    this.user = {
      username: this.login.value,
      password: this.password.value
    }
    this.loginService.login(this.user).subscribe(data => {
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveToken(data.token)
      console.log(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    }, error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    })

  }

  reloadPage() {
    window.location.href = ''
  }
}
