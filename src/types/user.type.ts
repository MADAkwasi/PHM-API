import { Document } from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
}

export interface IUserDocument extends IUser, Document {
  isPasswordCorrect(
    userPassword: string,
    savedPassword: string
  ): Promise<boolean>;
}

export enum UserRole {
  SALE_ATTENDANT = "sale-attendant",
  ADMIN = "admin",
  PHARMACIST = "pharmacist",
}
