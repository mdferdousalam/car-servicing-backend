import { Email, IAddress, IName } from "../shared/common.types";
import { Roles } from "../shared/user.enumeration";



export interface IUser {
  username: IName;
  email: Email;
  password: string;
  role: Roles;
  phone: string;
  address: IAddress;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
