import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../shared/models/user";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Auth} from "../../shared/models/auth";
import {State} from "../../shared/models/state";
import {PzpnTeam} from "../../shared/models/pzpn-team";
import {League} from "../../shared/models/league";

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

  getStates(): Observable<State[]> {
    return this.httpClient.get<State[]>(`${environment.url}pzpn/states`);
  }

  getLeagues(id:number): Observable<League[]>{
    return this.httpClient.get<League[]>(`${environment.url}pzpn/leagues?id=${id}`)
  }
  getTeams(id:number): Observable<PzpnTeam[]>{
    return this.httpClient.get<PzpnTeam[]>(`${environment.url}pzpn/teams?id=${id}`)
  }

}
