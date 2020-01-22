import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private jwtHelper: JwtHelperService) {
  }

  signOut() {
    localStorage.clear();
  }

  public saveToken(token: string) {

    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN_KEY);
    return !this.jwtHelper.isTokenExpired(token);
  }


}
