import {Team} from "./team";

export interface Club {
  id?: string;
  clubName: string;
  teams?: Team[];
}
