import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Match, MatchFormData} from "../../shared/models/match";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private URL = `${environment.url}match`;

  constructor(private http: HttpClient) {
  }


  getMatches(teamId) {
    return this.http.get<Match[]>(`${this.URL}/${teamId}`);
  }

  createMatch(teamId, match: Match) {
    return this.http.post<Match>(`${this.URL}/save/${teamId}`, match);

  }

  getMatchInfo(teamId: string) {
    return this.http.get<MatchFormData>(`${this.URL}/create/${teamId}`);
  }

  createReport(teamId: string, match: Match) {
    return this.http.post<HttpResponse<Blob>>(`${this.URL}/generateReport/${teamId}`, match,
      {
        responseType: 'blob' as 'json',
        observe: 'response'
      });
  }
}
