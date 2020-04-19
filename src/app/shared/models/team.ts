import {Club} from "./club";
import {Player} from "./player";
import {Dress} from "./dress";

export interface Team {
  id?: any;
  teamName: string;
  players?: Player[];
  dresses?: Dress[];

}

export interface TeamShortInfo {
  teamName:string;
  countPlayers:number;
  countMatches:number;
  countDress:number;
}
