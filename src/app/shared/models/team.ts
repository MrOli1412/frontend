import {Club} from "./club";
import {Player} from "./player";
import {Dress} from "./dress";

export interface Team {
  id?: any;
  teamName: string;
  club: Club;
  players: Player[];
  dresses: Dress[];

}
