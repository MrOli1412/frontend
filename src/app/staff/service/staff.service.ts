import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PlayerShortInfo} from "../../shared/models/player";
import {ClubPerson} from "../../shared/models/club-person";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private PREFIX = 'staffPerson';
  private URL = environment.url + this.PREFIX;

  constructor(private http: HttpClient) {
  }

  getStaffForTeam(getTeamId: any) {
    return this.http.get<ClubPerson[]>(this.URL + '/' + getTeamId);

  }

  saveStaffPerson(teamId: any, rawValue: any) {
    return this.http.post(`${this.URL}/${teamId}/save`, rawValue);
  }
}
