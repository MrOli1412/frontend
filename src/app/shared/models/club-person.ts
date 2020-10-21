import {StaffPosition} from "./staff-position";
import {Team} from "./team";


export interface ClubPerson {
  id?: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  position: StaffPosition;
  odderFunction: string;
  teams ?:Team[];
}
