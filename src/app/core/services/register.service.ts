import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../shared/models/user";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Auth} from "../../shared/models/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  PREFIX: string = 'auth/';

  constructor(private httpClient: HttpClient) {
  }

  createAccount(body: User) {
    return this.httpClient.post(environment.url + this.PREFIX + 'registry', body);
  }

  login(body: User): Observable<Auth> {
    return this.httpClient.post<Auth>(environment.url + this.PREFIX + 'login', body);
  }
}
