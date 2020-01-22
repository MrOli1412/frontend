import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../core/services/register.service";
import {TokenStorageService} from "../services/token-storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: TokenStorageService, public router: Router) {
  }

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login'])
      return false;
    }

    return true;
  }

}
