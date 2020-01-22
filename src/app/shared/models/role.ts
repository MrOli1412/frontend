export interface Role {
  id?:any;
  name:RoleName
}
export enum RoleName {
  ROLE_USER,
  ROLE_PM,
  ROLE_ADMIN
}
