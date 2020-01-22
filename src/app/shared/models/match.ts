import {Dress} from "./dress";
import {Player} from "./player";
import {Team} from "./team";

export interface Match {
  id?:any;
  matchDate:string;
  dress:Dress;
  players:Player[];
  isFinish:boolean;
  team:Team;
}
