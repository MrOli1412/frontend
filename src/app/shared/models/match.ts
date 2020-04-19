import {Dress} from "./dress";
import {Player} from "./player";
import {Team} from "./team";
import {Validators} from "@angular/forms";
import {ClubPerson} from "./club-person";

export interface Match {
  id?: any;
  matchDate: string;
  dress: string;
  firstSquad: Player[];
  reservedSquad: Player[];
  isFinish: boolean;
  teamName: string;
  captain: string;
  firstSquadGoalKeeper: string;
  reservedSquadGoalKeeper: string;
  isAway: boolean;
  staffPeople: ClubPerson[];
}

export interface MatchFormData {

  players: Player[];
  dress: Dress[];
  staffPersons: ClubPerson[];
}
