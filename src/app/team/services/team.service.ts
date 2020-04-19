import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Team, TeamShortInfo} from "../../shared/models/team";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private URL = environment.url;
  private PREFIX = 'team';

  constructor(private httpClient: HttpClient) {
  }

  getAllTeams() {
    return this.httpClient.get<Team[]>(this.URL + this.PREFIX);
  }

  createTeam(team: Team) {
    return this.httpClient.post<Team>(this.URL + this.PREFIX + `/create`, team);
  }

  getShortInfo(id: string) {
    return this.httpClient.get<TeamShortInfo>(this.URL + this.PREFIX + `/` + id);
  }
}
