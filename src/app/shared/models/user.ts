import {Club} from "./club";

export interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  club?: Club;
  pzpnTeamId?: string;
}
