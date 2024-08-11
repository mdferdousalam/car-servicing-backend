import { IUser} from "./user.interface";
import { UserModel } from "./user.model";
import bcrypt from "bcryptjs";

const registerUserIntoDB = async (userData: IUser) => {
  const existingUser = await UserModel.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new UserModel({ ...userData, password: hashedPassword });
  await user.save();
  return user;
};

const loginUserFromDB = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  return user;
};



export const UserServices = {
  registerUserIntoDB,
  loginUserFromDB,
};
