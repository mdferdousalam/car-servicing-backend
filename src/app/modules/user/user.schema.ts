import { z } from "zod";
import { Roles } from "../shared/user.enumeration";


const NameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});


const AddressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});


export const registerSchema = z.object({
  username: NameSchema,
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum([Roles.ADMIN, Roles.USER, Roles.MANAGER]),
  phone: z.string().min(1, "Phone number is required"),
  address: AddressSchema,
});


export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
