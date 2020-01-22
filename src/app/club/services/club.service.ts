import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Club} from "../../shared/models/club";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private URL = environment.url;

  constructor(private http: HttpClient) {
  }

  getClub() {
    return this.http.get<Club>(this.URL + `club`);
  }
}
