import {TransferType} from "./transfer-type.enum";
import {Team} from "./team";

export interface Player {
  id?: any;
  firstName: string;
  lastName: string;
  evidentialNumber: string;
  birthDay: string;
  contractDate: string;
  amateur?: string;
  lastClub?: string;
  transferType: TransferType;
  penaltyStartDate?: string;
  penaltyStopDate?: string;
  dressNumber?: number;
  team: Team;
}

export interface PlayerShortInfo {
  firstName: string;
  lastName: string;
  evidentialNumber: string;
  birthDay: string;
}

export interface PlayerMatchInfo {
  id: string;
  firstName: string;
  lastName: string;
  defaultNumber: number;
  birthDay: string;
}
