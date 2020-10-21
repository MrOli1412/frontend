import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Dress} from "../../shared/models/dress";

@Injectable({
  providedIn: 'root'
})
export class DressService {
  private PREFIX = 'dress';
  private URL = environment.url + this.PREFIX;

  constructor(private http: HttpClient) {
  }

  getDressForTeam(getTeamId: any) {
    return this.http.get<Dress[]>(this.URL + '/' + getTeamId);

  }

  saveDress(teamId: any, rawValue: any) {
    return this.http.post(`${this.URL}/${teamId}/save`, rawValue);
  }
}
