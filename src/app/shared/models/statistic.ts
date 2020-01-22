import {Player} from "./player";
import {Match} from "./match";

export interface Statistic {
  id?: any;
  redCards?: number;
  yellowCards?: number;
  goals?: number;
  assist?: number;
  player: Player;
  match: Match;
}
