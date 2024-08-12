import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import { Roles } from "../shared/user.enumeration";
import { IName, IAddress } from "../shared/common.types";


const NameSchema = new Schema<IName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  { _id: false }
);


const AddressSchema = new Schema<IAddress>(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
);

const UserSchema = new Schema<IUser>(
  {
    username: { type: NameSchema, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Roles), required: true },
    phone: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);


export const UserModel = model<IUser>("User", UserSchema);
