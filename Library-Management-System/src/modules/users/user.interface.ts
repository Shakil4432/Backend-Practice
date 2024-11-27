import { Types } from "mongoose";

export type IUser = {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  email: string;
  role: "admin" | "member";
  borrowed_books: Types.ObjectId[];
};
