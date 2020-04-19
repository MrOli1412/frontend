import {StaffPosition} from "./staff-position";


export interface ClubPerson {
  id?: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  isDefault: boolean;
  position: StaffPosition;
  odderFunction: string;
}
