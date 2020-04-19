import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {Player, PlayerShortInfo} from "../../shared/models/player";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private PREFIX = 'players';
  private URL = environment.url + this.PREFIX;

  constructor(private httpClient: HttpClient) {
  }

  getPlayerFromTeam(getTeamId: string) {
    return this.httpClient.get<PlayerShortInfo[]>(this.URL + '/' + getTeamId);
  }

  uploadFile(data, teamId) {
    return this.httpClient.post<any>(this.URL + `/` + teamId + `/upload`, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return {status: 'progress', message: progress};
        case HttpEventType.Response:
          return {status: 'completed', message: event.body};
        default:
          return `Unhandled event: ${event.type}`;
      }
    }))
  }

  savePlayersFromFile(data, teamId) {
    return this.httpClient.post<any>(`${this.URL}/${teamId}/file`, data);
  }

  savePlayer(teamId: any, playerData: Player) {
    return this.httpClient.post<Player>(`${this.URL}/${teamId}`, playerData);

  }
}
